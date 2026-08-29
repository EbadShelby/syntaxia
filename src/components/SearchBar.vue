<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { refNavItems, refTopics } from '@/data/refContent'

const query = ref('')
const isFocused = ref(false)
const searchInput = ref<HTMLInputElement | null>(null)
const router = useRouter()

// ── Search index ──────────────────────────────────────────────────────────────
interface SectionResult {
  type: 'section'
  lang: string
  langLabel: string
  langTitle: string
  sectionId: string
  sectionTitle: string
  description: string
}

interface TopicResult {
  type: 'topic'
  lang: string
  label: string
}

type SearchResult = TopicResult | SectionResult

const sectionIndex: SectionResult[] = Object.values(refTopics).flatMap((topic) =>
  topic.sections.map((section) => ({
    type: 'section' as const,
    lang: topic.lang,
    langLabel: topic.label,
    langTitle: topic.title,
    sectionId: section.id,
    sectionTitle: section.title,
    description: section.description,
  })),
)

// ── Smart Search Engine ───────────────────────────────────────────────────────

/**
 * Synonym/alias map: user's term → canonical search phrase(s).
 * Each key is a search query word; the value is an array of additional terms
 * that will be injected into the haystack match.
 */
const SYNONYMS: Record<string, string[]> = {
  // ── Loops ────────────────────────────────────────────────────────────────
  for: ['loops', 'loop'],
  'for loop': ['loops'],
  'for of': ['loops'],
  'for in': ['loops'],
  foreach: ['loops'],
  while: ['loops', 'loop'],
  'while loop': ['loops'],
  'do while': ['loops'],
  do: ['loops'],
  loop: ['loops'],
  iterate: ['loops'],
  iteration: ['loops'],
  repeat: ['loops'],
  break: ['loops'],
  continue: ['loops'],
  // ── Conditionals ─────────────────────────────────────────────────────────
  if: ['conditionals'],
  else: ['conditionals'],
  'if else': ['conditionals'],
  ifelse: ['conditionals'],
  switch: ['conditionals'],
  case: ['conditionals'],
  ternary: ['conditionals'],
  condition: ['conditionals'],
  comparison: ['conditionals'],
  // ── Functions ─────────────────────────────────────────────────────────────
  function: ['functions'],
  func: ['functions'],
  fn: ['functions'],
  arrow: ['functions', 'arrow function'],
  'arrow function': ['functions'],
  lambda: ['functions'],
  callback: ['functions'],
  closure: ['functions'],
  closures: ['functions'],
  return: ['functions'],
  parameter: ['functions'],
  argument: ['functions'],
  iife: ['functions'],
  generator: ['functions'],
  yield: ['functions'],
  // ── Classes / OOP ─────────────────────────────────────────────────────────
  class: ['classes'],
  oop: ['classes', 'object-oriented'],
  'object oriented': ['classes'],
  inheritance: ['classes'],
  constructor: ['classes'],
  extends: ['classes'],
  super: ['classes'],
  new: ['classes'],
  instance: ['classes'],
  static: ['classes'],
  private: ['classes'],
  getter: ['classes'],
  setter: ['classes'],
  // ── Error Handling ────────────────────────────────────────────────────────
  try: ['error handling'],
  catch: ['error handling'],
  throw: ['error handling'],
  finally: ['error handling'],
  error: ['error handling'],
  exception: ['error handling'],
  // ── Async / Promises ──────────────────────────────────────────────────────
  async: ['promises', 'async/await'],
  await: ['promises', 'async/await'],
  promise: ['promises', 'async/await'],
  'promise.then': ['promises', 'async/await'],
  resolve: ['promises', 'async/await'],
  reject: ['promises', 'async/await'],
  fetch: ['promises', 'async/await'],
  ajax: ['promises', 'async/await'],
  http: ['promises', 'async/await'],
  request: ['promises', 'async/await'],
  // ── Regex ─────────────────────────────────────────────────────────────────
  regex: ['regular expressions'],
  regexp: ['regular expressions'],
  match: ['regular expressions'],
  replace: ['regular expressions'],
  // ── Modules ───────────────────────────────────────────────────────────────
  import: ['modules'],
  export: ['modules'],
  module: ['modules'],
  require: ['modules'],
  // ── Variables / Types ─────────────────────────────────────────────────────
  var: ['variables'],
  let: ['variables'],
  const: ['variables'],
  constant: ['variables'],
  scope: ['variables'],
  type: ['data types'],
  typeof: ['data types'],
  cast: ['data types'],
  convert: ['data types'],
  boolean: ['data types'],
  bool: ['data types'],
  null: ['data types'],
  undefined: ['data types'],
  // ── Strings ───────────────────────────────────────────────────────────────
  string: ['strings'],
  text: ['strings'],
  str: ['strings'],
  char: ['strings', 'special characters'],
  template: ['strings', 'templates'],
  literal: ['strings'],
  concatenate: ['strings'],
  concat: ['strings'],
  trim: ['strings'],
  split: ['strings'],
  join: ['strings', 'joins'],
  // ── Numbers ───────────────────────────────────────────────────────────────
  number: ['numbers'],
  num: ['numbers'],
  int: ['numbers'],
  integer: ['numbers'],
  float: ['numbers'],
  decimal: ['numbers'],
  math: ['numbers'],
  round: ['numbers'],
  floor: ['numbers'],
  ceil: ['numbers'],
  random: ['numbers'],
  // ── Arrays ────────────────────────────────────────────────────────────────
  array: ['arrays'],
  list: ['arrays', 'lists'],
  push: ['arrays', 'push & pull'],
  pop: ['arrays'],
  shift: ['arrays'],
  unshift: ['arrays'],
  splice: ['arrays'],
  slice: ['arrays', 'array indexing & slicing'],
  map: ['arrays', 'maps & sets'],
  filter: ['arrays'],
  reduce: ['arrays'],
  find: ['arrays'],
  includes: ['arrays'],
  sort: ['arrays', 'order by — sort results'],
  flat: ['arrays'],
  // ── Objects ───────────────────────────────────────────────────────────────
  object: ['objects'],
  obj: ['objects'],
  dict: ['objects', 'hashes'],
  key: ['objects', 'basic key operations'],
  value: ['objects'],
  property: ['objects', 'attributes'],
  spread: ['objects'],
  destructure: ['objects'],
  // ── Maps & Sets ───────────────────────────────────────────────────────────
  set: ['maps & sets', 'sets'],
  weakmap: ['maps & sets'],
  weakset: ['maps & sets'],
  // ── JSON ──────────────────────────────────────────────────────────────────
  json: ['json'],
  parse: ['json'],
  stringify: ['json'],
  serialize: ['json'],
  // ── DOM / Events ──────────────────────────────────────────────────────────
  dom: ['dom manipulation'],
  element: ['dom manipulation'],
  event: ['dom manipulation', 'event handling'],
  click: ['dom manipulation', 'event handling'],
  listener: ['dom manipulation', 'event handling'],
  query: ['dom manipulation', 'querysets (orm)', 'select — read data'],
  selector: ['dom manipulation', 'selectors'],
  // ── Timing ────────────────────────────────────────────────────────────────
  timeout: ['timing functions'],
  interval: ['timing functions'],
  settimeout: ['timing functions'],
  setinterval: ['timing functions'],
  delay: ['timing functions'],
  timer: ['timing functions'],
  // ── Console / Debug ───────────────────────────────────────────────────────
  console: ['console methods'],
  log: ['console methods', 'logging', 'viewing history'],
  print: ['console methods'],
  debug: ['console methods', 'error handling'],
  warn: ['console methods'],
  // ── Git ───────────────────────────────────────────────────────────────────
  git: ['git version control'],
  merge: ['merging'],
  merging: ['merging'],
  rebase: ['rebasing'],
  branch: ['branches'],
  commit: ['committing'],
  stash: ['stashing'],
  pull: ['push & pull'],
  undo: ['undoing changes'],
  reset: ['undoing changes'],
  revert: ['undoing changes'],
  tag: ['tags'],
  ignore: ['ignoring files'],
  gitignore: ['ignoring files'],
  remote: ['push & pull'],
  clone: ['creating a repository'],
  init: ['creating a repository', 'setup'],
  history: ['viewing history'],
  diff: ['staging changes'],
  stage: ['staging changes'],
  add: ['staging changes', 'insert — add data'],
  submodule: ['submodules'],
  alias: ['aliases'],
  workflow: ['basic workflow', 'common workflow example'],
  // ── CSS Layout ────────────────────────────────────────────────────────────
  flex: ['flexbox'],
  flexbox: ['flexbox'],
  grid: ['grid layout'],
  responsive: ['responsive design'],
  media: ['responsive design'],
  animation: ['animations'],
  transition: ['transitions'],
  transform: ['transforms'],
  hover: ['pseudo-classes'],
  focus: ['pseudo-classes'],
  active: ['pseudo-classes'],
  before: ['pseudo-elements'],
  after: ['pseudo-elements'],
  padding: ['spacing (padding & margin)', 'box model'],
  margin: ['spacing (padding & margin)', 'box model'],
  width: ['width & height', 'box model'],
  height: ['width & height', 'box model'],
  overflow: ['sizing overflow'],
  position: ['position property'],
  display: ['display property'],
  border: ['borders', 'box model'],
  shadow: ['shadows'],
  background: ['background properties'],
  gradient: ['background properties'],
  font: ['fonts', 'typography'],
  color: ['colors'],
  unit: ['units'],
  variable: ['variables', 'variables (custom properties)'],
  'variable-css': ['variables (custom properties)'],
  'custom property': ['variables (custom properties)'],
  // ── SQL ───────────────────────────────────────────────────────────────────
  sql: ['mysql', 'basic syntax'],
  'select': ['select — read data'],
  insert: ['insert — add data'],
  update: ['update — modify data'],
  delete: ['delete — remove data'],
  where: ['where — filter data'],
  'order by': ['order by — sort results'],
  orderby: ['order by — sort results'],
  aggregate: ['aggregate functions'],
  count: ['aggregate functions'],
  sum: ['aggregate functions'],
  avg: ['aggregate functions'],
  'group by': ['aggregate functions'],
  // ── Vue ───────────────────────────────────────────────────────────────────
  prop: ['props'],
  emit: ['emits'],
  slot: ['slots'],
  lifecycle: ['lifecycle hooks'],
  hook: ['lifecycle hooks'],
  mounted: ['lifecycle hooks'],
  created: ['lifecycle hooks'],
  watcher: ['watchers'],
  watch: ['watchers'],
  compute: ['computed properties'],
  computed: ['computed properties'],
  inject: ['provide/inject'],
  provide: ['provide/inject'],
  ref: ['refs (dom access)'],
  reactive: ['data & reactivity'],
  reactivity: ['data & reactivity'],
  directive: ['directives'],
  vmodel: ['forms & v-model'],
  'v-model': ['forms & v-model'],
  'v-if': ['conditional rendering'],
  'v-for': ['list rendering'],
  component: ['component registration'],
  route: ['routing', 'vue router'],
  router: ['vue router (navigation)', 'routing'],
  navigate: ['navigation', 'routing'],
  store: ['pinia', 'state management'],
  state: ['pinia', 'state management'],
  pinia: ['pinia (state management)'],
  // ── Auth / Security ───────────────────────────────────────────────────────
  auth: ['authentication', 'user authentication'],
  login: ['user authentication', 'flask-login'],
  logout: ['user authentication'],
  password: ['password hashing', 'security'],
  security: ['security', 'password hashing'],
  token: ['jwt authentication'],
  jwt: ['jwt authentication'],
  hash: ['password hashing', 'hashes'],
  // ── APIs / Routing ────────────────────────────────────────────────────────
  api: ['rest api', 'route handlers'],
  rest: ['rest api patterns'],
  endpoint: ['rest api', 'route handlers', 'basic routing'],
  middleware: ['middleware'],
  cors: ['cors'],
  rate: ['rate limiting'],
  validation: ['validation', 'forms & validation'],
  // ── Server / Backend ──────────────────────────────────────────────────────
  server: ['setup', 'rest api example'],
  install: ['setup'],
  setup: ['setup'],
  config: ['settings', 'application context & config', 'configuration properties'],
  settings: ['settings'],
  env: ['environment variables'],
  environment: ['environment variables'],
  // ── Database / ORM ────────────────────────────────────────────────────────
  database: ['database'],
  db: ['database', 'database (pdo)'],
  orm: ['querysets (orm)', 'database (flask-sqlalchemy)'],
  model: ['models', 'entity (jpa model)'],
  migration: ['migrations', 'flask-migrate'],
  session: ['sessions & cookies'],
  cookie: ['sessions & cookies'],
  // ── File Operations ───────────────────────────────────────────────────────
  file: ['file handling', 'file uploads'],
  upload: ['file uploads', 'file uploads (multer)'],
  read: ['file handling'],
  write: ['file handling'],
  // ── Vue / React / Templates ───────────────────────────────────────────────
  layout: ['layouts', 'grid layout'],
  page: ['pages & routing (app router)'],
  render: ['server vs client components', 'static & dynamic rendering'],
  // ── Redis ─────────────────────────────────────────────────────────────────
  redis: ['redis'],
  cache: ['common patterns', 'persistence'],
  pub: ['pub/sub'],
  subscribe: ['pub/sub'],
  expire: ['expiration & ttl'],
  ttl: ['expiration & ttl'],
  transaction: ['transactions'],
  // ── NumPy ─────────────────────────────────────────────────────────────────
  numpy: ['numpy'],
  matrix: ['linear algebra'],
  reshape: ['array reshaping'],
  broadcast: ['broadcasting'],
  // ── HTML ─────────────────────────────────────────────────────────────────
  image: ['images'],
  icon: ['images'],
  comment: ['comments'],
  semantic: ['semantic elements'],
  accessibility: ['semantic elements'],
  meta: ['meta tags', 'metadata & seo'],
  seo: ['metadata & seo', 'meta tags'],
  heading: ['headings'],
  link: ['links'],
  button: ['button element'],
  form: ['forms'],
  input: ['input types', 'forms'],
  table: ['tables'],
  attribute: ['attributes'],
  script: ['script and style'],
  style: ['script and style', 'css & styling'],
  entity: ['special characters'],
  character: ['special characters'],
  symbol: ['special characters'],
  structure: ['basic structure'],
  doctype: ['basic structure'],
  // ── Misc ──────────────────────────────────────────────────────────────────
  signal: ['signals'],
  admin: ['admin panel'],
  test: ['testing', 'regular expressions'],
  testing: ['testing'],
  pattern: ['common patterns', 'regular expressions'],
  logging: ['logging'],
  dto: ['dtos & mapping'],
  dependency: ['dependency injection'],
  injection: ['dependency injection'],
  blueprint: ['blueprints'],
  profile: ['profiles'],
  job: ['common patterns'],
}

/**
 * Simple stemmer: strips common English suffixes to a root.
 * e.g. "merging" → "merg", "branches" → "branch"
 * Order matters: longest suffixes must come first.
 */
function stem(word: string): string {
  if (word.length <= 3) return word // Don't stem tiny words like "for", "if", "do"
  return word
    .replace(/tions$/, '')
    .replace(/tion$/, '')
    .replace(/ments$/, '')
    .replace(/ment$/, '')
    .replace(/ings$/, '')
    .replace(/ing$/, '')
    .replace(/ers$/, '')
    .replace(/er$/, '')
    .replace(/ed$/, '')
    .replace(/ies$/, 'y')
    .replace(/es$/, '')
    .replace(/s$/, '')
}

/**
 * Scoring constants — higher means this result is ranked earlier.
 */
const SCORE = {
  EXACT_TITLE: 100,
  EXACT_LANG: 80,
  TITLE_STARTS_WITH: 60,
  TITLE_INCLUDES: 40,
  STEM_MATCH: 25,
  SYNONYM_MATCH: 15,
  DESCRIPTION_MATCH: 10,
}

function scoreSection(s: SectionResult, tokens: string[]): number {
  const titleLower = s.sectionTitle.toLowerCase()
  const descLower = s.description.toLowerCase()
  const langHaystack = `${s.lang} ${s.langLabel} ${s.langTitle}`.toLowerCase()

  let score = 0

  for (const token of tokens) {
    const stemmedToken = stem(token)

    // Exact title word match
    if (titleLower === token) score += SCORE.EXACT_TITLE
    else if (titleLower.startsWith(token)) score += SCORE.TITLE_STARTS_WITH
    else if (titleLower.includes(token)) score += SCORE.TITLE_INCLUDES

    // Stem match in title
    const titleWords = titleLower.split(/[\s\-&/()]+/)
    if (titleWords.some((w) => stem(w) === stemmedToken || w.startsWith(stemmedToken))) {
      score += SCORE.STEM_MATCH
    }

    // Synonym expansion
    const synonymTerms = SYNONYMS[token] ?? []
    for (const syn of synonymTerms) {
      if (titleLower.includes(syn) || descLower.includes(syn)) {
        score += SCORE.SYNONYM_MATCH
        break
      }
    }

    // Description match
    if (descLower.includes(token)) score += SCORE.DESCRIPTION_MATCH

    // Lang match bonus
    if (langHaystack.includes(token)) score += SCORE.EXACT_LANG
  }

  return score
}

function scoreTopic(item: TopicResult, tokens: string[]): number {
  const haystack = `${item.lang} ${item.label} ${refTopics[item.lang]?.title ?? ''}`.toLowerCase()
  let score = 0
  for (const token of tokens) {
    if (haystack.includes(token)) score += SCORE.EXACT_TITLE
    else if (SYNONYMS[token]?.some((s) => haystack.includes(s))) score += SCORE.SYNONYM_MATCH
  }
  return score
}

/**
 * Returns true if ANY token matches anywhere in the haystack,
 * using exact substrings, stem matching, or synonym expansion.
 */
function matchesToken(haystack: string, token: string): boolean {
  if (haystack.includes(token)) return true

  // Stem match
  const stemmedToken = stem(token)
  const words = haystack.split(/[\s\-&/(),_]+/)
  if (words.some((w) => stem(w) === stemmedToken || w.startsWith(stemmedToken))) return true

  // Synonym match
  const synonymTerms = SYNONYMS[token] ?? []
  if (synonymTerms.some((syn) => haystack.includes(syn))) return true

  return false
}

// ── Computed results ──────────────────────────────────────────────────────────
const MAX_TOPICS = 3
const MAX_SECTIONS = 8

const searchResults = computed<SearchResult[]>(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return []

  const tokens = q.split(/\s+/).filter(Boolean)

  // Topics: must match ALL tokens
  const topicMatches: (TopicResult & { _score: number })[] = refNavItems
    .filter((item) => {
      const haystack =
        `${item.lang} ${item.label} ${refTopics[item.lang]?.title ?? ''}`.toLowerCase()
      return tokens.every((t) => matchesToken(haystack, t))
    })
    .map((item) => {
      const r: TopicResult = { type: 'topic', lang: item.lang, label: item.label }
      return { ...r, _score: scoreTopic(r, tokens) }
    })
    .sort((a, b) => b._score - a._score)
    .slice(0, MAX_TOPICS)

  // Sections: at least ONE token must match meaningfully
  const sectionMatches: (SectionResult & { _score: number })[] = sectionIndex
    .map((s) => {
      const titleLower = s.sectionTitle.toLowerCase()
      const descLower = s.description.toLowerCase()
      const langHaystack = `${s.lang} ${s.langLabel} ${s.langTitle}`.toLowerCase()
      const fullHaystack = `${langHaystack} ${titleLower} ${descLower}`

      // All tokens must match somewhere (AND logic, but extended with stemming/synonyms)
      const allMatch = tokens.every((t) => matchesToken(fullHaystack, t))
      if (!allMatch) return null

      return { ...s, _score: scoreSection(s, tokens) }
    })
    .filter((s): s is SectionResult & { _score: number } => s !== null && s._score > 0)
    .sort((a, b) => b._score - a._score)
    .slice(0, MAX_SECTIONS)

  // Strip internal _score before returning
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const topics: TopicResult[] = topicMatches.map(({ _score, ...r }) => r as TopicResult)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sections: SectionResult[] = sectionMatches.map(({ _score, ...r }) => r as SectionResult)

  return [...topics, ...sections]
})

const topicResults = computed(() =>
  searchResults.value.filter((r): r is TopicResult => r.type === 'topic'),
)
const sectionResults = computed(() =>
  searchResults.value.filter((r): r is SectionResult => r.type === 'section'),
)

// ── Ghost / Inline Autocomplete Suggestion ────────────────────────────────────
/**
 * Find the first section title that starts with (or closely matches) the query,
 * so we can show a "ghost" completion hint inside the input box.
 */
const ghostSuggestion = computed<string>(() => {
  const q = query.value.trim().toLowerCase()
  if (!q || q.length < 2) return ''

  // Look for a section title that starts with the query
  for (const s of sectionIndex) {
    const t = s.sectionTitle.toLowerCase()
    if (t.startsWith(q) && t !== q) return s.sectionTitle
  }

  // Look for topic label that starts with the query
  for (const item of refNavItems) {
    const label = item.label.toLowerCase()
    if (label.startsWith(q) && label !== q) return item.label
  }

  // No prefix match — suggest top result if available
  if (searchResults.value.length > 0) {
    const top = searchResults.value[0]
    if (top && top.type === 'section') return top.sectionTitle
    if (top && top.type === 'topic') return top.label
  }

  return ''
})

// The portion of the ghost that comes after the user's typed text
const ghostSuffix = computed<string>(() => {
  const q = query.value
  const suggestion = ghostSuggestion.value
  if (!suggestion || !q) return ''

  // If the suggestion starts with what the user typed (case-insensitive), show the rest
  if (suggestion.toLowerCase().startsWith(q.toLowerCase())) {
    return suggestion.slice(q.length)
  }
  return ''
})

// Accept the ghost suggestion on Tab or ArrowRight at end of input
const acceptGhost = () => {
  if (ghostSuggestion.value) {
    query.value = ghostSuggestion.value
    nextTick(() => {
      if (searchInput.value) {
        const len = query.value.length
        searchInput.value.setSelectionRange(len, len)
      }
    })
  }
}

// ── Keyboard navigation ───────────────────────────────────────────────────────
const selectedIndex = ref(0)
const resultsListRef = ref<HTMLElement | null>(null)

watch(searchResults, () => {
  selectedIndex.value = 0
})

const scrollToSelected = async () => {
  await nextTick()
  if (resultsListRef.value) {
    const items = resultsListRef.value.querySelectorAll<HTMLElement>('[data-result-item]')
    const el = items[selectedIndex.value] ?? null
    if (el) {
      el.scrollIntoView({ block: 'nearest' })
    }
  }
}

const handleArrowDown = (e: KeyboardEvent) => {
  if (!isFocused.value || searchResults.value.length === 0) return
  e.preventDefault()
  selectedIndex.value =
    selectedIndex.value < searchResults.value.length - 1 ? selectedIndex.value + 1 : 0
  scrollToSelected()
}

const handleArrowUp = (e: KeyboardEvent) => {
  if (!isFocused.value || searchResults.value.length === 0) return
  e.preventDefault()
  selectedIndex.value =
    selectedIndex.value > 0 ? selectedIndex.value - 1 : searchResults.value.length - 1
  scrollToSelected()
}

const handleKeydown = (e: KeyboardEvent) => {
  if (
    e.key === '/' &&
    document.activeElement?.tagName !== 'INPUT' &&
    document.activeElement?.tagName !== 'TEXTAREA'
  ) {
    e.preventDefault()
    searchInput.value?.focus()
  }
}

const handleInputKeydown = (e: KeyboardEvent) => {
  // Tab or ArrowRight at end of input → accept ghost suggestion
  if (
    (e.key === 'Tab' || e.key === 'ArrowRight') &&
    ghostSuffix.value &&
    searchInput.value?.selectionStart === query.value.length
  ) {
    e.preventDefault()
    acceptGhost()
  }
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))

// ── Navigation ────────────────────────────────────────────────────────────────
const navigateToTopic = (lang: string) => {
  query.value = ''
  isFocused.value = false
  searchInput.value?.blur()
  router.push(`/ref/${lang}`)
}

const navigateToSection = (lang: string, sectionId: string) => {
  query.value = ''
  isFocused.value = false
  searchInput.value?.blur()
  router.push(`/ref/${lang}`).then(() => {
    nextTick(() => {
      setTimeout(() => {
        const el = document.getElementById(sectionId)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
    })
  })
}

const handleEnter = () => {
  const item = searchResults.value[selectedIndex.value]
  if (!item) return
  if (item.type === 'topic') navigateToTopic(item.lang)
  else navigateToSection(item.lang, item.sectionId)
}

const handleBlur = () => {
  setTimeout(() => {
    isFocused.value = false
  }, 150)
}

// ── Text highlight helper ─────────────────────────────────────────────────────
function highlight(text: string, q: string): string {
  if (!q) return text
  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  return text.replace(
    new RegExp(`(${escaped})`, 'gi'),
    '<mark class="search-highlight">$1</mark>',
  )
}

// Maps a result item back to its flat selectedIndex position (topics before sections)
function getItemIndex(type: 'topic' | 'section', lang: string, sectionId?: string): number {
  return searchResults.value.findIndex((r) => {
    if (r.type !== type) return false
    if (r.lang !== lang) return false
    if (type === 'section') return (r as SectionResult).sectionId === sectionId
    return true
  })
}

// ── Match badge label ─────────────────────────────────────────────────────────
/** Returns a short label explaining WHY this result matched (e.g. "via synonym") */
function getMatchBadge(item: SectionResult): string | null {
  const q = query.value.trim().toLowerCase()
  const tokens = q.split(/\s+/).filter(Boolean)
  const titleLower = item.sectionTitle.toLowerCase()

  for (const token of tokens) {
    // Exact or prefix match → no badge needed
    if (titleLower.includes(token)) return null

    // Stem match
    const stemmedToken = stem(token)
    const titleWords = titleLower.split(/[\s\-&/()]+/)
    if (titleWords.some((w) => stem(w) === stemmedToken)) return 'similar'

    // Synonym match
    if (SYNONYMS[token]?.some((syn) => titleLower.includes(syn))) return 'related'
  }
  return null
}
</script>

<template>
  <div class="relative group">
    <div
      class="flex items-center rounded-md transition-all duration-300 overflow-hidden"
      :class="
        isFocused
          ? 'bg-neutral-black border border-primary-lightgreen px-3 py-1.5 cursor-text'
          : 'bg-transparent border border-transparent md:bg-neutral-black md:border-neutral-gray p-2 md:px-3 md:py-1.5 cursor-pointer md:cursor-text'
      "
      @click="searchInput?.focus()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-5 h-5 md:w-4 md:h-4 transition-colors shrink-0"
        :class="
          isFocused
            ? 'text-primary-lightgreen mr-2'
            : 'text-neutral-400 hover:text-white md:hover:text-neutral-400 md:mr-2'
        "
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>

      <!-- Input with ghost overlay -->
      <div
        class="relative transition-all duration-300"
        :class="
          isFocused
            ? 'w-40 md:w-56 lg:w-72 opacity-100'
            : 'w-0 md:w-48 lg:w-64 opacity-0 md:opacity-100'
        "
      >
        <!-- Ghost/autocomplete overlay (rendered behind the real input text) -->
        <div
          v-if="ghostSuffix && isFocused"
          class="absolute inset-0 flex items-center pointer-events-none"
          aria-hidden="true"
        >
          <span class="text-sm invisible whitespace-pre">{{ query }}</span>
          <span class="text-sm text-neutral-600 whitespace-pre">{{ ghostSuffix }}</span>
        </div>

        <input
          ref="searchInput"
          v-model="query"
          type="text"
          placeholder="Search topics & sections..."
          class="w-full bg-transparent text-sm text-white placeholder-neutral-500 outline-none relative z-10"
          @focus="isFocused = true"
          @blur="handleBlur"
          @keydown.enter="handleEnter"
          @keydown.down="handleArrowDown"
          @keydown.up="handleArrowUp"
          @keydown.esc="searchInput?.blur()"
          @keydown="handleInputKeydown"
        />
      </div>

      <!-- Ghost hint indicator (Tab key) -->
      <div
        v-if="ghostSuffix && isFocused"
        class="hidden md:flex items-center gap-0.5 ml-1 shrink-0"
        title="Press Tab to complete"
      >
        <kbd
          class="px-1 py-0.5 rounded border border-neutral-gray/40 bg-neutral-gray/10 text-[9px] text-neutral-600 font-mono"
          >Tab</kbd
        >
      </div>

      <div
        v-else
        class="hidden md:flex items-center justify-center w-5 h-5 rounded border border-neutral-gray bg-neutral-gray/20 text-[10px] text-neutral-400 ml-2 shrink-0"
        title="Press / to search"
      >
        /
      </div>
    </div>

    <!-- Search dropdown -->
    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div
        v-if="isFocused && query.trim().length > 0"
        class="absolute top-full right-0 mt-2 w-80 md:w-96 bg-neutral-black border border-neutral-gray rounded-lg shadow-2xl overflow-hidden z-50"
      >
        <div ref="resultsListRef" class="max-h-105 overflow-y-auto no-scrollbar">
          <!-- No results -->
          <div
            v-if="searchResults.length === 0"
            class="px-4 py-8 text-sm text-neutral-500 text-center flex flex-col items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8 text-neutral-700"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <span>No results for <strong class="text-neutral-300">"{{ query }}"</strong></span>
          </div>

          <template v-else>
            <!-- ── Topics group ── -->
            <div v-if="topicResults.length > 0">
              <div
                class="px-3 pt-3 pb-1.5 text-[10px] font-semibold uppercase tracking-widest text-neutral-500 flex items-center gap-1.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25z"
                  />
                </svg>
                Topics
              </div>
              <button
                v-for="item in topicResults"
                :key="item.lang"
                data-result-item
                @click="navigateToTopic(item.lang)"
                @mousemove="selectedIndex = getItemIndex('topic', item.lang)"
                class="w-full text-left px-3 py-2.5 text-sm transition-colors focus:outline-none flex items-center gap-3"
                :class="
                  selectedIndex === getItemIndex('topic', item.lang)
                    ? 'text-primary-lightgreen bg-neutral-gray/20'
                    : 'text-neutral-300 hover:text-primary-lightgreen hover:bg-neutral-gray/10'
                "
              >
                <div
                  class="w-6 h-6 rounded flex items-center justify-center shrink-0 bg-neutral-gray/30"
                >
                  <img
                    :src="refTopics[item.lang]?.icon"
                    :alt="item.label"
                    class="w-4 h-4 object-contain"
                  />
                </div>
                <span v-html="highlight(item.label, query.trim())" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-3 h-3 ml-auto opacity-50 shrink-0"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>

            <!-- ── Sections group ── -->
            <div v-if="sectionResults.length > 0">
              <div
                class="px-3 pb-1.5 text-[10px] font-semibold uppercase tracking-widest text-neutral-500 flex items-center gap-1.5"
                :class="topicResults.length > 0 ? 'pt-3 border-t border-neutral-gray/50 mt-1' : 'pt-3'"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-3 h-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
                  />
                </svg>
                Sections
              </div>
              <button
                v-for="item in sectionResults"
                :key="`${item.lang}-${item.sectionId}`"
                data-result-item
                @click="navigateToSection(item.lang, item.sectionId)"
                @mousemove="selectedIndex = getItemIndex('section', item.lang, item.sectionId)"
                class="w-full text-left px-3 py-2.5 text-sm transition-colors focus:outline-none flex items-start gap-3"
                :class="
                  selectedIndex === getItemIndex('section', item.lang, item.sectionId)
                    ? 'bg-neutral-gray/20'
                    : 'hover:bg-neutral-gray/10'
                "
              >
                <div class="flex items-center gap-1.5 shrink-0 mt-0.5">
                  <div class="w-5 h-5 rounded flex items-center justify-center bg-neutral-gray/30">
                    <img
                      :src="refTopics[item.lang]?.icon"
                      :alt="item.langLabel"
                      class="w-3.5 h-3.5 object-contain"
                    />
                  </div>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-1.5">
                    <div
                      class="font-medium truncate transition-colors"
                      :class="
                        selectedIndex === getItemIndex('section', item.lang, item.sectionId)
                          ? 'text-primary-lightgreen'
                          : 'text-neutral-200'
                      "
                      v-html="highlight(item.sectionTitle, query.trim())"
                    />
                    <!-- Match-reason badge -->
                    <span
                      v-if="getMatchBadge(item) === 'similar'"
                      class="shrink-0 text-[9px] px-1 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium leading-none"
                    >
                      ~similar
                    </span>
                    <span
                      v-else-if="getMatchBadge(item) === 'related'"
                      class="shrink-0 text-[9px] px-1 py-0.5 rounded bg-violet-500/10 text-violet-400 border border-violet-500/20 font-medium leading-none"
                    >
                      related
                    </span>
                  </div>
                  <div class="text-xs text-neutral-500 truncate mt-0.5">
                    <span
                      class="text-neutral-600 mr-1"
                      v-html="highlight(item.langLabel, query.trim())"
                    />
                    <span v-html="highlight(item.description, query.trim())" />
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-3 h-3 mt-1 opacity-30 shrink-0"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>

            <!-- Footer hint -->
            <div
              class="px-3 py-2 border-t border-neutral-gray/50 flex items-center gap-3 text-[10px] text-neutral-600"
            >
              <span class="flex items-center gap-1">
                <kbd class="px-1 py-0.5 rounded bg-neutral-gray/20 border border-neutral-gray/30 font-mono">↑↓</kbd>
                navigate
              </span>
              <span class="flex items-center gap-1">
                <kbd class="px-1 py-0.5 rounded bg-neutral-gray/20 border border-neutral-gray/30 font-mono">↵</kbd>
                open
              </span>
              <span class="flex items-center gap-1">
                <kbd class="px-1 py-0.5 rounded bg-neutral-gray/20 border border-neutral-gray/30 font-mono">Tab</kbd>
                complete
              </span>
              <span class="flex items-center gap-1">
                <kbd class="px-1 py-0.5 rounded bg-neutral-gray/20 border border-neutral-gray/30 font-mono">esc</kbd>
                close
              </span>
            </div>
          </template>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
:deep(.search-highlight) {
  background: transparent;
  color: #4ade80;
  font-weight: 600;
}
</style>
