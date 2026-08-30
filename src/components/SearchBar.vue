<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { refNavItems, refTopics } from '@/data/refContent'

const query = ref('')
const isFocused = ref(false)
const searchInput = ref<HTMLInputElement | null>(null)
const router = useRouter()

// ── Visual viewport (keyboard-aware height on mobile) ─────────────────────────
const dropdownMaxHeight = ref('26rem') // default (desktop)

function updateDropdownHeight() {
  const vv = window.visualViewport
  if (!vv) return
  // Header is ~60px tall; 8px breathing room below dropdown
  const available = vv.height - 60 - 8
  dropdownMaxHeight.value = `${Math.max(available, 120)}px`
}

// ── Mobile full-screen search overlay ──────────────────────────────────────────
const mobileOpen = ref(false)
const mobileInput = ref<HTMLInputElement | null>(null)

function openMobileSearch() {
  mobileOpen.value = true
  nextTick(() => mobileInput.value?.focus())
}

function closeMobileSearch() {
  mobileOpen.value = false
  query.value = ''
  selectedIndex.value = 0
  mobileInput.value?.blur()
}

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

  // ═══════════════════════════════════════════════════════════
  // TOPIC / LANGUAGE ALIASES
  // ═══════════════════════════════════════════════════════════

  html: ['html'], markup: ['html'], webpage: ['html'],
  css: ['css'], stylesheet: ['css', 'styling'], styling: ['css', 'css & styling'], styles: ['css'],
  js: ['javascript'], javascript: ['javascript'], ecmascript: ['javascript'], es6: ['javascript'], vanilla: ['javascript'],
  ts: ['typescript'], typescript: ['typescript'], tsc: ['setup', 'configuration (tsconfig.json)'], tsconfig: ['configuration (tsconfig.json)'],
  php: ['php'],
  mysql: ['mysql'], sql: ['mysql', 'basic syntax'], relational: ['mysql', 'postgresql'], rdbms: ['mysql', 'postgresql'],
  postgresql: ['postgresql'], postgres: ['postgresql'], psql: ['postgresql', 'useful commands (psql)'],
  mongodb: ['mongodb'], mongo: ['mongodb'], nosql: ['mongodb'],
  redis: ['redis'],
  tailwind: ['tailwind'], 'tailwind css': ['tailwind'], 'utility first': ['tailwind'],
  bootstrap: ['bootstrap'], 'bootstrap css': ['bootstrap'],
  vue: ['vue'], vuejs: ['vue'], 'vue.js': ['vue'],
  react: ['react'], reactjs: ['react'], 'react.js': ['react'],
  'react native': ['react native'], reactnative: ['react native'], rn: ['react native'], expo: ['react native'], mobile: ['react native'],
  angular: ['angular'], ng: ['angular'],
  next: ['next.js'], nextjs: ['next.js'], ssr: ['next.js', 'server vs client components'], ssg: ['next.js', 'static & dynamic rendering'],
  node: ['node.js'], nodejs: ['node.js'], 'node.js': ['node.js'], npm: ['node.js', 'npm scripts & nodemon', 'common npm packages'], npx: ['node.js'],
  express: ['express'], expressjs: ['express'],
  flask: ['flask'],
  django: ['django'],
  laravel: ['laravel'],
  spring: ['spring boot'], springboot: ['spring boot'], 'spring boot': ['spring boot'],
  python: ['python'], py: ['python'],
  pandas: ['pandas'], dataframe: ['pandas', 'creating dataframes & series'], 'data frame': ['pandas'],
  numpy: ['numpy'], ndarray: ['numpy', 'creating arrays'],
  go: ['go'], golang: ['go'],
  kotlin: ['kotlin'],
  rust: ['rust'],
  swift: ['swift'], ios: ['swift'], swiftui: ['swift'],
  dart: ['dart'], flutter: ['dart'],
  ruby: ['ruby'], rails: ['ruby'],
  lua: ['lua'],
  cpp: ['c++'], cplusplus: ['c++'],
  csharp: ['c#'], dotnet: ['c#'],
  java: ['java'], jvm: ['java'],
  jquery: ['jquery'],
  docker: ['docker'], container: ['docker', 'running containers'], containers: ['docker'], dockerfile: ['dockerfile'],
  compose: ['docker compose'], 'docker compose': ['docker compose'],
  git: ['git version control'], github: ['github-specific workflow'], vcs: ['git version control'], 'version control': ['git version control'],
  linux: ['linux commands'], bash: ['linux commands'], shell: ['linux commands'], terminal: ['linux commands'], unix: ['linux commands'],
  cli: ['linux commands', 'angular cli commands', 'artisan commands'],
  windows: ['windows commands'], cmd: ['windows commands'], powershell: ['windows commands'], 'command prompt': ['windows commands'],
  motion: ['motion'], framer: ['motion'], 'framer motion': ['motion'], variant: ['variants'], variants: ['variants'],
  gesture: ['hover & tap', 'drag'], drag: ['drag'],

  // ═══════════════════════════════════════════════════════════
  // LOOPS
  // ═══════════════════════════════════════════════════════════

  for: ['loops', 'loop'], 'for loop': ['loops'], 'for of': ['loops'], 'for in': ['loops'],
  foreach: ['loops'], 'for each': ['loops'], while: ['loops', 'loop'], 'while loop': ['loops'],
  'do while': ['loops'], do: ['loops'], loop: ['loops'], iterate: ['loops'], iteration: ['loops'],
  repeat: ['loops'], break: ['loops'], continue: ['loops'], range: ['loops'], looping: ['loops'],

  // ═══════════════════════════════════════════════════════════
  // CONDITIONALS
  // ═══════════════════════════════════════════════════════════

  if: ['conditionals'], else: ['conditionals'], 'if else': ['conditionals'], ifelse: ['conditionals'],
  switch: ['conditionals'], case: ['conditionals'], ternary: ['conditionals'], condition: ['conditionals'],
  comparison: ['conditionals'], when: ['conditionals'], guard: ['conditionals', 'guards'],
  'if statement': ['conditionals'], branching: ['conditionals', 'branches'], 'boolean logic': ['conditionals'],

  // ═══════════════════════════════════════════════════════════
  // FUNCTIONS
  // ═══════════════════════════════════════════════════════════

  function: ['functions'], func: ['functions'], fn: ['functions'],
  method: ['functions', 'methods (functions)', 'methods'], arrow: ['functions'], 'arrow function': ['functions'],
  lambda: ['functions', 'blocks, procs & lambdas'], callback: ['functions'],
  closure: ['functions', 'closures & higher-order functions'], closures: ['functions', 'closures & higher-order functions'],
  return: ['functions'], parameter: ['functions'], argument: ['functions'], iife: ['functions'],
  generator: ['functions'], yield: ['functions'], higher: ['functions', 'closures & higher-order functions'],
  'higher order': ['functions', 'closures & higher-order functions'], currying: ['functions'],
  overload: ['functions'], 'default parameter': ['functions'], 'rest parameter': ['functions'],
  spread: ['functions', 'objects'], variadic: ['functions'],

  // ═══════════════════════════════════════════════════════════
  // CLASSES / OOP
  // ═══════════════════════════════════════════════════════════

  class: ['classes'], oop: ['classes', 'classes & oop', 'classes & objects'],
  'object oriented': ['classes', 'classes & oop'], inheritance: ['classes'], constructor: ['classes'],
  extends: ['classes'], super: ['classes'], new: ['classes'], instance: ['classes'], static: ['classes'],
  private: ['classes'], public: ['classes'], protected: ['classes'], getter: ['classes'], setter: ['classes'],
  abstract: ['classes'], interface: ['interfaces', 'interfaces & functional interfaces'], trait: ['traits'],
  protocol: ['protocols'], mixin: ['tables as objects (oop)'], struct: ['structs'], enum: ['enums'], enums: ['enums'],
  sealed: ['classes'], data_class: ['classes & objects'], record: ['records (c# 9+)', 'records & pattern matching (dart 3+)'],
  singleton: ['classes', 'common patterns'], polymorphism: ['classes'], encapsulation: ['classes'],

  // ═══════════════════════════════════════════════════════════
  // ERROR HANDLING
  // ═══════════════════════════════════════════════════════════

  try: ['error handling', 'exception handling'], catch: ['error handling', 'exception handling'],
  throw: ['error handling', 'exception handling'], finally: ['error handling', 'exception handling'],
  error: ['error handling', 'exception handling'], exception: ['error handling', 'exception handling'],
  'error boundary': ['error boundaries'], panic: ['error handling'], unwrap: ['error handling'],
  'try catch': ['error handling', 'exception handling'],

  // ═══════════════════════════════════════════════════════════
  // ASYNC / PROMISES
  // ═══════════════════════════════════════════════════════════

  async: ['promises', 'async/await', 'async programming'], await: ['promises', 'async/await'],
  promise: ['promises', 'async/await', 'then'],
  resolve: ['promises', 'async/await'], reject: ['promises', 'async/await'],
  fetch: ['promises', 'async/await', 'fetching data (api calls)'], ajax: ['promises', 'async/await', 'ajax'],
  http: ['promises', 'async/await', 'http server (built-in)', 'http client'],
  request: ['promises', 'async/await', 'request object', 'request & response'],
  response: ['response methods', 'request & response', 'response handling'],
  goroutine: ['goroutines & channels'], channel: ['goroutines & channels'], coroutine: ['coroutines'],
  future: ['async programming'], observable: ['observables & rxjs'], rxjs: ['observables & rxjs'],
  stream: ['streams', 'streams (java 8+)'], 'async await': ['promises', 'async/await'],
  concurrent: ['goroutines & channels'], parallel: ['goroutines & channels'],
  'event loop': ['promises'], microtask: ['promises'],

  // ═══════════════════════════════════════════════════════════
  // VARIABLES / TYPES
  // ═══════════════════════════════════════════════════════════

  var: ['variables'], let: ['variables'], const: ['variables'], constant: ['variables'],
  scope: ['variables'], variable: ['variables', 'variables (custom properties)'], declare: ['variables'],
  type: ['data types'], typeof: ['data types'], cast: ['data types'], convert: ['data types'],
  boolean: ['data types'], bool: ['data types'], null: ['data types', 'nullable reference types'],
  undefined: ['data types'], nullable: ['null safety', 'nullable reference types'], 'null safety': ['null safety'],
  optional: ['optionals', 'optional'], any: ['data types', 'basic types'], unknown: ['basic types'],
  void: ['basic types'], never: ['advanced types'], 'type annotation': ['basic types'],
  'type inference': ['basic types'], 'static typing': ['basic types'],

  // ═══════════════════════════════════════════════════════════
  // STRINGS
  // ═══════════════════════════════════════════════════════════

  string: ['strings'], text: ['strings'], str: ['strings'], char: ['strings', 'special characters'],
  template: ['strings', 'templates', 'blade templates', 'template syntax (interpolation)'],
  literal: ['strings'], concatenate: ['strings', 'combining & splitting arrays'], concat: ['strings'], trim: ['strings'], split: ['strings'],
  format: ['strings'], interpolation: ['strings', 'template syntax (interpolation)'],
  'string method': ['strings'], substring: ['strings'], 'regular expression': ['regular expressions'],
  lowercase: ['strings'], uppercase: ['strings'], 'string formatting': ['strings'],
  join: ['strings', 'joins', 'merging & joining'],

  // ═══════════════════════════════════════════════════════════
  // NUMBERS
  // ═══════════════════════════════════════════════════════════

  number: ['numbers', 'numbers & math'], num: ['numbers'], int: ['numbers'], integer: ['numbers'],
  float: ['numbers'], decimal: ['numbers'], math: ['numbers', 'mathematical functions', 'numbers & math'],
  round: ['numbers'], floor: ['numbers'], ceil: ['numbers'], random: ['numbers'],
  arithmetic: ['numbers'], modulo: ['numbers'], exponent: ['numbers'], 'math function': ['mathematical functions', 'numbers'],

  // ═══════════════════════════════════════════════════════════
  // ARRAYS / LISTS / COLLECTIONS
  // ═══════════════════════════════════════════════════════════

  array: ['arrays', 'creating arrays'],
  list: ['arrays', 'lists', 'lists (collections)', 'collections (lists, sets, maps)'],
  push: ['arrays', 'push & pull'], pop: ['arrays'], shift: ['arrays'], unshift: ['arrays'],
  splice: ['arrays'], slice: ['arrays', 'array indexing & slicing'],
  map: ['arrays', 'maps & sets', 'maps'], filter: ['arrays'], reduce: ['arrays'],
  find: ['arrays', 'sorting & searching', 'find documents'], includes: ['arrays'],
  sort: ['arrays', 'sorting & searching', 'order by — sort results', 'sorting & ranking'],
  flat: ['arrays'], vector: ['vectors'],
  collection: ['collections (lists, sets, maps)', 'mongodb', 'database & collection basics'],
  tuple: ['basic types', 'tuples'], stack: ['arrays'], queue: ['arrays'], deque: ['arrays'],
  'array method': ['arrays'], flatten: ['arrays'], 'array slicing': ['array indexing & slicing'],
  'list comprehension': ['list/dict comprehensions'], 'dict comprehension': ['list/dict comprehensions'],
  comprehension: ['list/dict comprehensions'],

  // ═══════════════════════════════════════════════════════════
  // OBJECTS / DICTIONARIES
  // ═══════════════════════════════════════════════════════════

  object: ['objects', 'classes & objects'], obj: ['objects'],
  dict: ['objects', 'hashes', 'dictionaries'], dictionary: ['objects', 'hashes', 'dictionaries'],
  hash: ['objects', 'hashes', 'hashmaps'], hashmap: ['hashmaps'], key: ['objects', 'basic key operations'],
  value: ['objects'], property: ['objects', 'attributes'], destructure: ['objects'], destructuring: ['objects'],
  'object spread': ['objects'], 'object method': ['objects'], 'key value': ['objects'], entry: ['objects'],

  // ═══════════════════════════════════════════════════════════
  // SETS / MAPS / JSON
  // ═══════════════════════════════════════════════════════════

  set: ['maps & sets', 'sets', 'set operations'], weakmap: ['maps & sets'], weakset: ['maps & sets'],
  'sorted set': ['sorted sets'],
  json: ['json', 'json handling', 'json & jsonb'], parse: ['json'], stringify: ['json'],
  serialize: ['json'], deserialize: ['json'], jsonb: ['json & jsonb'], 'json parse': ['json'],

  // ═══════════════════════════════════════════════════════════
  // MODULES / IMPORTS
  // ═══════════════════════════════════════════════════════════

  import: ['modules', 'modules & imports', 'packages & imports'], export: ['modules'],
  module: ['modules', 'modules (commonjs)', 'modules (es modules)'], require: ['modules', 'modules (commonjs)'],
  package: ['package.json', 'packages & imports'], namespace: ['packages & imports'],
  commonjs: ['modules (commonjs)'], esm: ['modules (es modules)'], 'es module': ['modules (es modules)'],

  // ═══════════════════════════════════════════════════════════
  // REGEX / GENERICS / DOM / TIMING / CONSOLE
  // ═══════════════════════════════════════════════════════════

  regex: ['regular expressions'], regexp: ['regular expressions'], pattern: ['regular expressions', 'common patterns'],
  match: ['regular expressions'], 'regex match': ['regular expressions'], 'find and replace': ['regular expressions'],
  generic: ['generics'], generics: ['generics'], 'type parameter': ['generics'],
  'generic function': ['generics'], 'generic class': ['generics'], 'generic constraint': ['generics'],
  dom: ['dom manipulation'], element: ['dom manipulation'],
  event: ['dom manipulation', 'event handling', 'events'], click: ['dom manipulation', 'event handling'],
  listener: ['dom manipulation', 'event handling'], 'event listener': ['dom manipulation', 'event handling'],
  query: ['dom manipulation', 'querysets (orm)', 'find documents'], selector: ['dom manipulation', 'selectors'],
  create: ['dom manipulation', 'creating & inserting elements'],
  insert: ['dom manipulation', 'insert documents', 'insert — add data', 'insert data'],
  remove: ['dom manipulation', 'removing elements', 'delete documents'], traverse: ['traversing dom'],
  append: ['dom manipulation', 'creating & inserting elements'], 'query selector': ['dom manipulation'],
  'get element': ['dom manipulation'], innerhtml: ['dom manipulation'],
  timeout: ['timing functions'], interval: ['timing functions'], settimeout: ['timing functions'],
  setinterval: ['timing functions'], delay: ['timing functions'], timer: ['timing functions'],
  debounce: ['common patterns'], throttle: ['common patterns'],
  console: ['console methods'], log: ['console methods', 'logging'], print: ['console methods'],
  debug: ['console methods', 'error handling'], warn: ['console methods'], inspect: ['console methods'],
  'console log': ['console methods'],

  // ═══════════════════════════════════════════════════════════
  // GIT
  // ═══════════════════════════════════════════════════════════

  merge: ['merging'], merging: ['merging'], rebase: ['rebasing'], branch: ['branches'],
  commit: ['committing changes'], committing: ['committing changes'], stash: ['stashing'],
  pull: ['push & pull'], remote: ['remote repositories', 'push & pull'],
  undo: ['undoing changes'], reset: ['undoing changes'], revert: ['undoing changes'], rollback: ['undoing changes'],
  tag: ['tags'], ignore: ['ignoring files'], gitignore: ['ignoring files'],
  clone: ['creating a repository'], init: ['creating a repository', 'setup'],
  history: ['viewing history'], diff: ['comparing changes (diff)'], stage: ['staging changes'],
  conflict: ['working with conflicts'], 'cherry pick': ['cherry pick'], cherrypick: ['cherry pick'],
  submodule: ['submodules'], alias: ['aliases', 'aliases & shell customization'],
  workflow: ['basic workflow', 'common workflow example', 'github-specific workflow'],
  blame: ['viewing history'], amend: ['committing changes'], squash: ['rebasing'],
  fork: ['github-specific workflow'], 'pull request': ['github-specific workflow'], pr: ['github-specific workflow'],
  'git log': ['viewing history'], 'git diff': ['comparing changes (diff)'], 'git status': ['staging changes'],
  'git add': ['staging changes'], 'git commit': ['committing changes'], 'git push': ['push & pull'],
  'git pull': ['push & pull'], 'git merge': ['merging'], 'git branch': ['branches'],
  'git checkout': ['branches'], 'git rebase': ['rebasing'], 'git stash': ['stashing'],
  'git clone': ['creating a repository'], 'git init': ['creating a repository'], 'git tag': ['tags'],
  'git reset': ['undoing changes'], 'git revert': ['undoing changes'],
  'working tree': ['staging changes'], 'staging area': ['staging changes'],

  // ═══════════════════════════════════════════════════════════
  // CSS / STYLING
  // ═══════════════════════════════════════════════════════════

  flex: ['flexbox', 'display & flexbox utilities'], flexbox: ['flexbox'],
  'flex container': ['flexbox'], 'flex item': ['flexbox'], 'justify content': ['flexbox'],
  'align items': ['flexbox'], 'flex direction': ['flexbox'],
  grid: ['grid layout', 'grid system'], 'css grid': ['grid layout'], 'grid template': ['grid layout'],
  responsive: ['responsive design', 'dimensions & responsive design'], media: ['responsive design'],
  'media query': ['responsive design'], breakpoint: ['responsive design'],
  transition: ['transitions'], transform: ['transforms'], hover: ['pseudo-classes'], focus: ['pseudo-classes'],
  active: ['pseudo-classes'], before: ['pseudo-elements'], after: ['pseudo-elements'],
  pseudo: ['pseudo-classes', 'pseudo-elements'],
  padding: ['spacing (padding & margin)', 'box model', 'spacing utilities'],
  margin: ['spacing (padding & margin)', 'box model', 'spacing utilities'],
  width: ['width & height', 'box model'], height: ['width & height', 'box model'],
  overflow: ['sizing overflow', 'sizing utilities'], position: ['position property'],
  display: ['display property', 'display & flexbox utilities'],
  border: ['borders', 'box model', 'border utilities'], 'border radius': ['borders'],
  shadow: ['shadows'], 'box shadow': ['shadows'],
  background: ['background properties', 'colors & backgrounds'], gradient: ['background properties'],
  font: ['fonts', 'typography'], 'font size': ['fonts', 'typography'], 'font weight': ['fonts'],
  color: ['colors', 'colors & backgrounds'], unit: ['units'],
  'custom property': ['variables (custom properties)'],
  'css variable': ['variables (custom properties)'], animation: ['animations', 'basic animation'],
  keyframe: ['animations'], specificity: ['selectors'], 'box model': ['box model'],
  'z index': ['position property'], opacity: ['colors'], 'text align': ['typography'],
  'line height': ['typography'], 'letter spacing': ['typography'],

  // ═══════════════════════════════════════════════════════════
  // SQL / DATABASE QUERIES
  // ═══════════════════════════════════════════════════════════

  select: ['select — read data', 'select data'], 'select data': ['select data', 'select — read data'],
  'insert data': ['insert — add data', 'insert data'], update: ['update — modify data', 'update data'],
  delete: ['delete — remove data', 'delete data'], where: ['where — filter data', 'where clause'],
  'inner join': ['joins'], 'left join': ['joins'], 'right join': ['joins'], 'outer join': ['joins'],
  'order by': ['order by — sort results', 'order by'], orderby: ['order by — sort results'],
  'group by': ['aggregate functions', 'group by'], groupby: ['aggregate functions', 'groupby'],
  aggregate: ['aggregate functions', 'aggregation & statistics', 'aggregation pipeline'],
  count: ['aggregate functions'], sum: ['aggregate functions'], avg: ['aggregate functions'],
  min: ['aggregate functions'], max: ['aggregate functions'], 'alter table': ['alter table'],
  index: ['indexes'], constraint: ['constraints'], 'foreign key': ['constraints', 'relationships'],
  'primary key': ['constraints'], transaction: ['transactions'], view: ['views'],
  subquery: ['subqueries'], cte: ['common table expressions (cte)'], 'window function': ['window functions'],
  backup: ['backup and restore'], restore: ['backup and restore'], privilege: ['users and privileges'],
  permission: ['users and privileges', 'file permissions'], distinct: ['select — read data'],
  limit: ['select — read data', 'select data'], offset: ['select — read data'],

  // ═══════════════════════════════════════════════════════════
  // REACT
  // ═══════════════════════════════════════════════════════════

  component: ['basic component', 'component registration', 'components'],
  jsx: ['jsx syntax'], tsx: ['jsx syntax'], usestate: ['state with usestate'],
  useeffect: ['useeffect hook'], useref: ['useref hook'], usecontext: ['usecontext hook'],
  usememo: ['usememo & usecallback'], usecallback: ['usememo & usecallback'],
  'custom hook': ['custom hooks'], 'react hook': ['custom hooks'],
  hook: ['lifecycle hooks', 'custom hooks'], lifecycle: ['lifecycle hooks', 'component lifecycle (with hooks)'],
  context: ['usecontext hook'], 'react router': ['react router'],
  'controlled input': ['forms & controlled inputs'], keys: ['lists & keys'],
  'list rendering': ['list rendering', 'lists & keys'], 'conditional rendering': ['conditional rendering'],
  memo: ['usememo & usecallback'], ref: ['useref hook', 'refs (dom access)'],
  'react state': ['state with usestate'], 'react props': ['basic component'],
  'react form': ['forms & controlled inputs'], 'react list': ['lists & keys'],
  'component lifecycle': ['component lifecycle (with hooks)', 'lifecycle hooks'],
  'react context': ['usecontext hook'], 'react router dom': ['react router'],

  // ═══════════════════════════════════════════════════════════
  // VUE
  // ═══════════════════════════════════════════════════════════

  prop: ['props'], emit: ['emits (child to parent)'], slot: ['slots'],
  mounted: ['lifecycle hooks'], created: ['lifecycle hooks'], watcher: ['watchers'], watch: ['watchers'],
  computed: ['computed properties'], compute: ['computed properties'],
  inject: ['provide/inject'], provide: ['provide/inject'],
  reactive: ['data & reactivity (options api)', 'composition api (modern way)'],
  reactivity: ['data & reactivity (options api)'], directive: ['directives'],
  'v-model': ['forms & v-model'], vmodel: ['forms & v-model'], 'v-if': ['conditional rendering'],
  'v-for': ['list rendering'], 'v-bind': ['directives', 'class & style binding'],
  'v-on': ['directives', 'event handling'], 'composition api': ['composition api (modern way)'],
  'options api': ['data & reactivity (options api)'], pinia: ['pinia (state management)'],
  vuex: ['pinia (state management)'], store: ['pinia (state management)'],
  state: ['pinia (state management)', 'state with usestate'], 'vue router': ['vue router (navigation)'],
  router: ['vue router (navigation)', 'routing'], route: ['routing', 'vue router (navigation)'],
  navigate: ['navigation', 'routing'], navigation: ['navigation', 'routing', 'vue router (navigation)'],
  'vue emit': ['emits (child to parent)'], 'vue slot': ['slots'], 'vue prop': ['props'],
  teleport: ['component registration'], 'vue lifecycle': ['lifecycle hooks'],
  'vue computed': ['computed properties'], 'vue watcher': ['watchers'],

  // ═══════════════════════════════════════════════════════════
  // ANGULAR
  // ═══════════════════════════════════════════════════════════

  pipe: ['pipes'], interceptor: ['interceptors'], viewchild: ['viewchild & elementref'],
  elementref: ['viewchild & elementref'], 'data binding': ['data binding'],
  binding: ['data binding', 'class & style binding'], 'template driven': ['forms (template-driven)'],
  'reactive form': ['forms (reactive)'], 'http client': ['http client'],
  'ng-content': ['content projection (ng-content)'], 'content projection': ['content projection (ng-content)'],
  'angular service': ['services'], 'angular guard': ['guards'], 'angular module': ['components'],
  'angular pipe': ['pipes'], 'angular directive': ['directives'], 'angular component': ['components'],
  'angular interceptor': ['interceptors'], 'angular form': ['forms (template-driven)', 'forms (reactive)'],
  'angular cli': ['angular cli commands'], 'ng generate': ['angular cli commands'],

  // ═══════════════════════════════════════════════════════════
  // NODE.JS
  // ═══════════════════════════════════════════════════════════

  'package.json': ['package.json'], 'file system': ['file system (fs)', 'file & directory operations'],
  fs: ['file system (fs)', 'file handling'], path: ['path module'], 'http server': ['http server (built-in)'],
  'event emitter': ['events (eventemitter)'], eventemitter: ['events (eventemitter)'],
  process: ['process & os'], nodemon: ['npm scripts & nodemon'], 'npm script': ['npm scripts & nodemon'],
  mongoose: ['mongodb with mongoose'], multer: ['file uploads (multer)', 'file uploads'],
  'node stream': ['streams'], 'node event': ['events (eventemitter)'],
  'node module': ['modules (commonjs)', 'modules (es modules)'],
  'node http': ['http server (built-in)'], 'node process': ['process & os'],
  'node path': ['path module'], 'node fs': ['file system (fs)'],

  // ═══════════════════════════════════════════════════════════
  // EXPRESS
  // ═══════════════════════════════════════════════════════════

  'body parsing': ['body parsing'], 'body parser': ['body parsing'], 'serve static': ['serving static files'],
  cors: ['cors'], 'rate limit': ['rate limiting'], 'rate limiting': ['rate limiting'],
  validation: ['validation', 'forms & validation'], 'express route': ['basic routing'],
  'express middleware': ['express middleware', 'middleware'], 'express router': ['express router'],
  'express request': ['express request & response'], 'express response': ['express request & response', 'response methods'],
  'express static': ['serving static files'], 'template engine': ['template engines'],
  'view engine': ['template engines'], ejs: ['template engines'], handlebars: ['template engines'],

  // ═══════════════════════════════════════════════════════════
  // AUTH / SECURITY
  // ═══════════════════════════════════════════════════════════

  auth: ['authentication', 'user authentication', 'authentication (jwt example)'],
  authentication: ['authentication', 'user authentication'], login: ['user authentication', 'flask-login'],
  logout: ['user authentication'], signup: ['user authentication'], register: ['user authentication'],
  password: ['password hashing', 'security'], security: ['security', 'password hashing'],
  token: ['jwt authentication', 'authentication (jwt example)'],
  jwt: ['jwt authentication', 'authentication (jwt example)'], 'bearer token': ['jwt authentication'],
  oauth: ['authentication'], session: ['sessions & cookies', 'sessions & flash messages'],
  cookie: ['sessions & cookies'], hashing: ['password hashing'], bcrypt: ['password hashing'],
  'jwt token': ['jwt authentication'], 'access token': ['jwt authentication'], 'refresh token': ['jwt authentication'],
  'user auth': ['user authentication'], 'sign in': ['user authentication'], 'sign up': ['user authentication'],

  // ═══════════════════════════════════════════════════════════
  // API / REST / BACKEND
  // ═══════════════════════════════════════════════════════════

  api: ['rest api', 'route handlers (api routes)', 'rest api example'],
  rest: ['rest api patterns', 'rest api example'], restful: ['rest api patterns'],
  endpoint: ['rest api', 'route handlers (api routes)', 'basic routing'], middleware: ['middleware'],
  server: ['setup', 'rest api example', 'http server (built-in)'], 'server action': ['server actions'],
  'api route': ['route handlers (api routes)'], webhook: ['rest api patterns'],
  'rest api': ['rest api patterns', 'rest api example'], 'api endpoint': ['basic routing', 'route handlers (api routes)'],
  'api request': ['request object', 'request & response'], 'api response': ['response methods', 'response handling'],
  'status code': ['response methods', 'response handling'], 'http method': ['rest api patterns', 'basic routing'],
  'get request': ['rest api patterns'], 'post request': ['rest api patterns'],
  'put request': ['rest api patterns'], 'delete request': ['rest api patterns'], 'patch request': ['rest api patterns'],

  // ═══════════════════════════════════════════════════════════
  // LARAVEL
  // ═══════════════════════════════════════════════════════════

  blade: ['blade templates'], eloquent: ['eloquent models', 'eloquent queries'], artisan: ['artisan commands'],
  seeder: ['seeders & factories'], factory: ['seeders & factories'], relationship: ['relationships'],
  'has many': ['relationships'], 'belongs to': ['relationships'], 'has one': ['relationships'],
  'many to many': ['relationships'], facade: ['common helper functions'], helper: ['common helper functions'],
  flash: ['sessions & flash messages', 'flash messages'], 'laravel route': ['routing'],
  'laravel controller': ['controllers'], 'laravel model': ['eloquent models'],
  'laravel migration': ['migrations'], 'laravel validation': ['validation'],
  'laravel middleware': ['middleware'], 'laravel auth': ['authentication'], 'laravel blade': ['blade templates'],
  'laravel eloquent': ['eloquent models', 'eloquent queries'], 'laravel seeder': ['seeders & factories'],
  'laravel artisan': ['artisan commands'], 'laravel session': ['sessions & flash messages'],

  // ═══════════════════════════════════════════════════════════
  // DJANGO / FLASK
  // ═══════════════════════════════════════════════════════════

  jinja: ['templates (jinja2)'], jinja2: ['templates (jinja2)'], 'flask login': ['flask-login'],
  blueprint: ['blueprints'], 'flask form': ['flask-wtf (form validation)'],
  sqlalchemy: ['database (flask-sqlalchemy)'], 'flask migrate': ['flask-migrate'],
  'flask restful': ['flask-restful / flask-cors'], queryset: ['querysets (orm)'],
  orm: ['querysets (orm)', 'database (flask-sqlalchemy)'], signal: ['signals'], admin: ['admin panel'],
  'django shell': ['django shell'], 'django rest': ['django rest framework (api)'], drf: ['django rest framework (api)'],
  'class based view': ['views (class-based)', 'class-based view mixins'],
  'function based view': ['views (function-based)'], 'django model': ['models'],
  'django view': ['views (function-based)', 'views (class-based)'], 'django url': ['urls'],
  'django admin': ['admin panel'], 'django auth': ['user authentication'], 'django signal': ['signals'],
  'django migration': ['migrations'], 'django static': ['static & media files'],
  'flask route': ['basic routing', 'routing'], 'flask template': ['templates (jinja2)'],
  'flask db': ['database (flask-sqlalchemy)'], 'flask api': ['rest api patterns'],
  'flask blueprint': ['blueprints'], 'flask config': ['application context & config'],

  // ═══════════════════════════════════════════════════════════
  // DATABASE & ORM
  // ═══════════════════════════════════════════════════════════

  database: ['database', 'database & collection basics'], db: ['database'],
  model: ['models', 'entity (jpa model)', 'eloquent models'], migration: ['migrations', 'flask-migrate'],
  relation: ['relationships', 'entity relationships'],
  schema: ['schema design (embedding vs referencing)', 'models'],

  // ═══════════════════════════════════════════════════════════
  // CONFIG / ENV / FILES
  // ═══════════════════════════════════════════════════════════

  install: ['setup', 'installation & setup'], setup: ['setup'],
  config: ['settings', 'application context & config', 'configuration properties'],
  settings: ['settings'], env: ['environment variables', 'environment configuration'],
  environment: ['environment variables', 'environment configuration'], dotenv: ['environment variables'],
  profile: ['profiles'], 'env variable': ['environment variables', 'environment configuration'],
  file: ['file handling', 'file uploads', 'file system (fs)', 'file & directory operations'],
  upload: ['file uploads', 'file uploads (multer)'],
  read: ['file handling', 'reading & writing data', 'viewing file contents'],
  write: ['file handling', 'reading & writing data'], directory: ['file & directory operations'],
  folder: ['file & directory operations'], 'file read': ['file handling', 'file system (fs)'],
  'file write': ['file handling', 'file system (fs)'], 'file upload': ['file uploads', 'file uploads (multer)'],
  'read file': ['file handling', 'file system (fs)'], 'write file': ['file handling', 'file system (fs)'],
  'file io': ['file handling', 'file system (fs)'],

  // ═══════════════════════════════════════════════════════════
  // SPRING BOOT
  // ═══════════════════════════════════════════════════════════

  controller: ['rest controllers', 'controllers'], 'rest controller': ['rest controllers'],
  entity: ['entity (jpa model)', 'special characters'], jpa: ['entity (jpa model)', 'repository (spring data jpa)'],
  repository: ['repository (spring data jpa)'], 'service layer': ['service layer'],
  'spring security': ['spring security'], testing: ['testing'], dto: ['dtos & mapping'],
  mapping: ['dtos & mapping'], logging: ['logging'], 'request mapping': ['request mapping annotations'],
  '@getmapping': ['request mapping annotations'], '@postmapping': ['request mapping annotations'],
  '@restcontroller': ['rest controllers'], '@entity': ['entity (jpa model)'],
  '@repository': ['repository (spring data jpa)'], '@service': ['service layer'],
  '@autowired': ['dependency injection'], 'spring jwt': ['jwt authentication'],
  'spring auth': ['spring security'], 'spring config': ['configuration properties'],
  'spring profile': ['profiles'], 'spring logging': ['logging'], 'spring test': ['testing'],

  // ═══════════════════════════════════════════════════════════
  // NEXT.JS
  // ═══════════════════════════════════════════════════════════

  layout: ['layouts', 'grid layout', 'flexbox layout'], page: ['pages & routing (app router)'],
  render: ['server vs client components', 'static & dynamic rendering'], 'data fetching': ['data fetching'],
  swr: ['client-side data fetching (swr)'], 'app router': ['pages & routing (app router)'],
  'server component': ['server vs client components'], 'client component': ['server vs client components'],
  metadata: ['metadata & seo', 'meta tags'], loading: ['loading & error states'],
  'next layout': ['layouts'], 'next page': ['pages & routing (app router)'],
  'next api': ['route handlers (api routes)'], 'next font': ['fonts'], 'next image': ['static assets'],
  'next metadata': ['metadata & seo'], 'next ssr': ['server vs client components'],
  'next ssg': ['static & dynamic rendering'], 'use client': ['server vs client components'],
  'use server': ['server vs client components', 'server actions'],

  // ═══════════════════════════════════════════════════════════
  // DOCKER
  // ═══════════════════════════════════════════════════════════

  image: ['images', 'working with images', 'building images'], 'docker image': ['working with images'],
  'docker container': ['running containers'], volume: ['volumes'], network: ['networks', 'networking'],
  registry: ['registry & pushing images'], 'docker build': ['building images'],
  'docker run': ['running containers'], 'docker push': ['registry & pushing images'],
  cleanup: ['cleaning up'], prune: ['cleaning up'], 'docker volume': ['volumes'],
  'docker network': ['networks'], 'docker ps': ['managing containers'],
  'docker exec': ['executing commands in containers'], 'docker inspect': ['inspecting containers'],
  'docker logs': ['inspecting containers'], 'docker stop': ['managing containers'],
  'docker rm': ['managing containers'], 'docker rmi': ['cleaning up'], 'docker pull': ['working with images'],
  'docker tag': ['registry & pushing images'],

  // ═══════════════════════════════════════════════════════════
  // BOOTSTRAP
  // ═══════════════════════════════════════════════════════════

  navbar: ['navbar'], modal: ['modal'], card: ['cards'], button: ['button element', 'buttons'],
  alert: ['alerts'], badge: ['badges'], dropdown: ['dropdowns'], spinner: ['spinners'],
  toast: ['toast'], tooltip: ['tooltips & popovers'], popover: ['tooltips & popovers'],
  accordion: ['accordion'], carousel: ['carousel'], pagination: ['pagination'],
  breadcrumb: ['breadcrumb'], progress: ['progress bars'], 'list group': ['list group'],
  'grid system': ['grid system'], 'bs grid': ['grid system'], 'bs flex': ['display & flexbox utilities'],
  tab: ['tabs'],

  // ═══════════════════════════════════════════════════════════
  // JQUERY
  // ═══════════════════════════════════════════════════════════

  'jquery selector': ['selectors'], 'jquery event': ['events'], 'jquery animation': ['effects & animation'],
  'jquery ajax': ['ajax'], chaining: ['chaining'], effect: ['effects & animation'],
  'jquery dom': ['dom manipulation'], 'jquery form': ['form handling'],

  // ═══════════════════════════════════════════════════════════
  // PYTHON
  // ═══════════════════════════════════════════════════════════

  pip: ['setup'], venv: ['setup'], virtualenv: ['setup'], builtin: ['common built-in functions'],
  'built-in': ['common built-in functions'], datetime: ['working with dates', 'date and time'],
  unpacking: ['working with multiple values'], decorator: ['classes & oop'],
  'python list': ['arrays', 'lists'], 'python dict': ['dictionaries'], 'python set': ['sets'],
  'python tuple': ['tuples'], 'python class': ['classes & oop'], 'python function': ['functions'],
  'python loop': ['loops'], 'python string': ['strings'], 'python import': ['modules & imports'],
  'python exception': ['error handling'], 'python file': ['file handling'],
  enumerate: ['loops'],

  // ═══════════════════════════════════════════════════════════
  // PANDAS
  // ═══════════════════════════════════════════════════════════

  'read csv': ['reading & writing data'], read_csv: ['reading & writing data'],
  loc: ['selecting data'], iloc: ['selecting data'], 'missing data': ['handling missing data'],
  nan: ['handling missing data', 'nan & infinity handling'], dropna: ['handling missing data'],
  fillna: ['handling missing data'], 'pivot table': ['pivot tables & reshaping'],
  pivot: ['pivot tables & reshaping'], melt: ['pivot tables & reshaping'],
  'pandas merge': ['merging & joining'], duplicate: ['duplicate handling'], dtype: ['data types & conversion'],
  'pandas groupby': ['groupby'], 'pandas sort': ['sorting & ranking'], 'pandas filter': ['selecting data'],
  'pandas apply': ['modifying data'], 'pandas concat': ['merging & joining'],
  describe: ['aggregation & statistics'], 'head tail': ['viewing data'],
  'value counts': ['aggregation & statistics'], 'reset index': ['modifying data'],
  'rename column': ['modifying data'], 'drop column': ['modifying data'],
  'pandas datetime': ['date/time operations'],

  // ═══════════════════════════════════════════════════════════
  // NUMPY
  // ═══════════════════════════════════════════════════════════

  matrix: ['linear algebra'], reshape: ['array reshaping'], broadcast: ['broadcasting'],
  'linear algebra': ['linear algebra'], 'dot product': ['linear algebra'],
  'element wise': ['array operations (element-wise)'], 'numpy array': ['creating arrays'],
  'numpy math': ['mathematical functions'], arange: ['creating arrays'], linspace: ['creating arrays'],
  zeros: ['creating arrays'], ones: ['creating arrays'], 'numpy sort': ['sorting & searching'],
  vstack: ['combining & splitting arrays'],
  hstack: ['combining & splitting arrays'], 'numpy nan': ['nan & infinity handling'],

  // ═══════════════════════════════════════════════════════════
  // MONGODB
  // ═══════════════════════════════════════════════════════════

  'find documents': ['find documents'], 'insert documents': ['insert documents'],
  'update documents': ['update documents'], 'delete documents': ['delete documents'],
  aggregation: ['aggregation pipeline', 'aggregation & statistics'], pipeline: ['aggregation pipeline'],
  'text search': ['text search'], 'schema design': ['schema design (embedding vs referencing)'],
  embedding: ['schema design (embedding vs referencing)'], referencing: ['schema design (embedding vs referencing)'],
  'native driver': ['node.js mongodb driver (native)'], 'mongo find': ['find documents'],
  'mongo insert': ['insert documents'], 'mongo update': ['update documents'],
  'mongo delete': ['delete documents'], 'mongo aggregate': ['aggregation pipeline'],
  'query operator': ['query operators'],

  // ═══════════════════════════════════════════════════════════
  // REDIS
  // ═══════════════════════════════════════════════════════════

  cache: ['common patterns', 'persistence'], pub: ['pub/sub'], subscribe: ['pub/sub'],
  'pub sub': ['pub/sub'], pubsub: ['pub/sub'], expire: ['expiration & ttl'], ttl: ['expiration & ttl'],
  'key naming': ['key naming conventions'], persistence: ['persistence'],

  // ═══════════════════════════════════════════════════════════
  // C# / JAVA / GO / KOTLIN / RUST / SWIFT / DART / RUBY / LUA
  // ═══════════════════════════════════════════════════════════

  linq: ['linq'], delegate: ['classes'], 'nullable types': ['nullable reference types'],
  records: ['records (c# 9+)'], 'csharp async': ['async/await'], 'csharp generic': ['generics'],
  annotation: ['entity (jpa model)', 'request mapping annotations'], maven: ['setup'], gradle: ['setup'],
  'java stream': ['streams (java 8+)'], 'java optional': ['optional'],
  'functional interface': ['interfaces & functional interfaces'],
  defer: ['functions'], 'go interface': ['interfaces'], 'go struct': ['structs'],
  'go goroutine': ['goroutines & channels'], 'go channel': ['goroutines & channels'],
  'go slice': ['arrays & slices'], 'go map': ['maps'], 'go error': ['error handling'],
  'go json': ['json handling'], 'go http': ['http server'], 'go package': ['packages & imports'],
  'kotlin coroutine': ['coroutines'], 'scope function': ['scope functions'],
  'null check': ['null safety'], 'elvis operator': ['null safety'], 'data class': ['classes & objects'],
  ownership: ['ownership & borrowing'], borrow: ['ownership & borrowing'], borrowing: ['ownership & borrowing'],
  lifetime: ['ownership & borrowing'], 'rust trait': ['traits'], iterator: ['iterators & closures'],
  cargo: ['setup'], 'rust struct': ['structs'], 'rust match': ['conditionals'],
  'swift optional': ['optionals'], 'swift protocol': ['protocols'], 'swift class': ['classes'],
  'swift struct': ['structs'], 'swift enum': ['enums'], 'swift closure': ['closures & higher-order functions'],
  widget: ['dart', 'core components'], 'dart async': ['async programming'], 'dart future': ['async programming'],
  gem: ['setup'], 'ruby block': ['blocks, procs & lambdas'], proc: ['blocks, procs & lambdas'],
  'ruby hash': ['hashes'], 'lua table': ['tables as objects (oop)'], metatables: ['tables as objects (oop)'],

  // ═══════════════════════════════════════════════════════════
  // REACT NATIVE
  // ═══════════════════════════════════════════════════════════

  flatlist: ['lists (flatlist & sectionlist)'], sectionlist: ['lists (flatlist & sectionlist)'],
  'react navigation': ['navigation (react navigation)'], asyncstorage: ['asyncstorage'],
  keyboard: ['keyboard handling'], platform: ['platform-specific code'], 'text input': ['text input'],
  'activity indicator': ['activityindicator & loading states'],
  touchable: ['buttons & touchables'], 'react native style': ['styling'],
  'react native flex': ['flexbox layout'], 'react native nav': ['navigation (react navigation)'],
  'react native list': ['lists (flatlist & sectionlist)'],
  'react native image': ['images & icons'], 'react native button': ['buttons & touchables'],
  dimensions: ['dimensions & responsive design'],

  // ═══════════════════════════════════════════════════════════
  // LINUX / WINDOWS COMMANDS
  // ═══════════════════════════════════════════════════════════

  ls: ['navigation', 'file & directory operations'], cd: ['navigation'],
  mkdir: ['file & directory operations'], rm: ['file & directory operations'],
  cp: ['file & directory operations'], mv: ['file & directory operations'],
  grep: ['searching', 'text processing'], chmod: ['file permissions'], chown: ['file permissions'],
  ps: ['process management'], kill: ['process management'], top: ['process management', 'server & monitoring commands'],
  ssh: ['networking'], curl: ['networking'], wget: ['networking'], ping: ['networking'],
  ifconfig: ['networking'], netstat: ['networking'], tar: ['archives & compression'],
  zip: ['archives & compression'], unzip: ['archives & compression'], apt: ['package management'],
  'apt-get': ['package management'], brew: ['package management'], yum: ['package management'],
  awk: ['text processing'], sed: ['text processing'], cat: ['viewing file contents'],
  less: ['viewing file contents'], head: ['viewing file contents'], tail: ['viewing file contents'],
  nano: ['file editing (nano & vim basics)'], vim: ['file editing (nano & vim basics)'],
  vi: ['file editing (nano & vim basics)'], systemctl: ['system services (systemd)'],
  service: ['system services (systemd)'], useradd: ['user management'], passwd: ['user management'],
  df: ['disk & system info'], du: ['disk & system info'], echo: ['redirection & pipes'],
  'pipe operator': ['redirection & pipes'], xargs: ['redirection & pipes'],
  cron: ['system services (systemd)'], 'cron job': ['system services (systemd)'],
  'list files': ['file & directory operations', 'navigation'], 'change directory': ['navigation'],
  'search file': ['searching'], 'find file': ['searching'], 'linux permission': ['file permissions'],
  'process list': ['process management'], 'kill process': ['process management'],
  'check disk': ['disk & system info'],
  compress: ['archives & compression'], 'install package': ['package management'],

  // ═══════════════════════════════════════════════════════════
  // HTML
  // ═══════════════════════════════════════════════════════════

  structure: ['basic structure'], doctype: ['basic structure'], comment: ['comments'],
  semantic: ['semantic elements'], accessibility: ['semantic elements'], meta: ['meta tags', 'metadata & seo'],
  seo: ['metadata & seo', 'meta tags'], heading: ['headings'], link: ['links'],
  form: ['forms', 'forms & v-model', 'forms & validation'], input: ['input types', 'forms', 'text input'],
  table: ['tables'], character: ['special characters'],
  symbol: ['special characters'], script: ['script and style'], style: ['script and style', 'css & styling'],
  'html form': ['forms'], 'html table': ['tables'], 'html link': ['links'], 'html input': ['input types'],
  section: ['semantic elements'], article: ['semantic elements'], header: ['semantic elements'],
  footer: ['semantic elements'], paragraph: ['basic structure'],

  // ═══════════════════════════════════════════════════════════
  // TYPESCRIPT
  // ═══════════════════════════════════════════════════════════

  'type alias': ['type aliases'], 'utility type': ['utility types'], partial: ['utility types'],
  readonly: ['utility types'], pick: ['utility types'], omit: ['utility types'],
  exclude: ['utility types'], nonnullable: ['utility types'], keyof: ['advanced types'],
  mapped: ['advanced types'], conditional: ['advanced types', 'conditionals'],
  'type guard': ['advanced types'], assertion: ['type assertions'], 'type assertion': ['type assertions'],
  'ts interface': ['interfaces'], 'ts generic': ['generics'], 'ts enum': ['enums'],
  'ts type': ['type aliases', 'basic types'], 'ts utility': ['utility types'],
  'ts config': ['configuration (tsconfig.json)'],

  // ═══════════════════════════════════════════════════════════
  // MOTION / TAILWIND / MISC
  // ═══════════════════════════════════════════════════════════

  animate: ['basic animation', 'animate prop'], 'initial animate': ['initial & animate'],
  exit: ['exit animations'], 'exit animation': ['exit animations'],
  scroll: ['scroll animations'], 'animation control': ['animation controls'],
  'motion value': ['usemotionvalue & usetransform'],
  'hover animation': ['hover & tap'], 'tap animation': ['hover & tap'],
  'arbitrary value': ['custom values (arbitrary values)'],
  test: ['testing'], unittest: ['testing'], 'unit test': ['testing'], mock: ['testing'],
  deploy: ['setup', 'static & dynamic rendering'], build: ['setup', 'building images'],
  'project structure': ['project structure'], scaffold: ['setup', 'project structure'],
  boilerplate: ['setup', 'basic structure'], 'design pattern': ['common patterns'],
  observer: ['signals', 'observables & rxjs'], mvc: ['controllers', 'views (function-based)'],
  mvvm: ['data binding'], 'getting started': ['setup'], beginner: ['setup', 'basic syntax'],
  basics: ['basic syntax', 'basic structure'], example: ['common patterns', 'rest api example', 'common workflow example'],
  'cheat sheet': ['common patterns'], 'best practice': ['common patterns'],
  optimization: ['performance tips'], performance: ['performance tips'],
  dependency: ['dependency injection'], injection: ['dependency injection'],
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

/**
 * Minimum number of tokens that must match for a result to appear.
 * - 1–2 tokens: ALL must match (strict)
 * - 3+ tokens: all-but-one must match (soft AND — tolerates one unrecognised word)
 */
function matchThreshold(tokenCount: number): number {
  if (tokenCount <= 2) return tokenCount
  return tokenCount - 1
}

const searchResults = computed<SearchResult[]>(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return []

  const tokens = q.split(/\s+/).filter(Boolean)
  const threshold = matchThreshold(tokens.length)

  // Topics: still require ALL tokens (keeps topic results precise)
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

  // Sections: soft AND — at least `threshold` tokens must match
  const sectionMatches: (SectionResult & { _score: number })[] = sectionIndex
    .map((s) => {
      const titleLower = s.sectionTitle.toLowerCase()
      const descLower = s.description.toLowerCase()
      const langHaystack = `${s.lang} ${s.langLabel} ${s.langTitle}`.toLowerCase()
      const fullHaystack = `${langHaystack} ${titleLower} ${descLower}`

      const matchedCount = tokens.filter((t) => matchesToken(fullHaystack, t)).length
      if (matchedCount < threshold) return null

      // Multiply by coverage so full-match results always rank above partial ones
      const coverage = matchedCount / tokens.length
      const rawScore = scoreSection(s, tokens)
      return { ...s, _score: rawScore * coverage }
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


onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
  window.visualViewport?.addEventListener('resize', updateDropdownHeight)
  updateDropdownHeight()
})
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  window.visualViewport?.removeEventListener('resize', updateDropdownHeight)
})

// ── Navigation ────────────────────────────────────────────────────────────────
const navigateToTopic = (lang: string) => {
  query.value = ''
  isFocused.value = false
  mobileOpen.value = false
  searchInput.value?.blur()
  mobileInput.value?.blur()
  router.push(`/ref/${lang}`)
}

const navigateToSection = (lang: string, sectionId: string) => {
  query.value = ''
  isFocused.value = false
  mobileOpen.value = false
  searchInput.value?.blur()
  mobileInput.value?.blur()
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
  return text.replace(new RegExp(`(${escaped})`, 'gi'), '<mark class="search-highlight">$1</mark>')
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


</script>

<template>
  <!-- ─── Mobile: Search icon trigger ──────────────────────────────────────── -->
  <button
    id="mobile-search-btn"
    class="md:hidden flex items-center justify-center w-9 h-9 rounded-md border border-neutral-gray bg-neutral-black text-neutral-400 hover:text-primary-lightgreen hover:border-primary-lightgreen/40 active:scale-95 transition-all duration-150 cursor-pointer"
    @click="openMobileSearch"
    aria-label="Open search"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      class="w-4.5 h-4.5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  </button>

  <!-- ─── Mobile: Full-screen search overlay ────────────────────────────────── -->
  <Teleport to="body">
    <Transition name="mobile-search">
      <div
        v-if="mobileOpen"
        id="mobile-search-overlay"
        class="md:hidden fixed inset-0 z-[100] bg-neutral-black flex flex-col"
      >
        <!-- ── Top bar: input + cancel ── -->
        <div class="flex items-center gap-3 px-4 py-3 border-b border-neutral-gray shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-5 h-5 text-primary-lightgreen shrink-0"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            ref="mobileInput"
            v-model="query"
            type="search"
            placeholder="Search cheatsheets & sections..."
            class="flex-1 bg-transparent text-white text-base outline-none placeholder-neutral-500 min-w-0"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            @keydown.enter="handleEnter"
            @keydown.esc="closeMobileSearch"
            @keydown.down="handleArrowDown"
            @keydown.up="handleArrowUp"
          />
          <button
            @click="closeMobileSearch"
            class="shrink-0 text-sm font-semibold text-primary-lightgreen py-1 px-1 -mr-1 cursor-pointer active:opacity-70 transition-opacity"
          >
            Cancel
          </button>
        </div>

        <!-- ── Results body ── -->
        <div class="flex-1 overflow-y-auto no-scrollbar">
          <!-- Empty state -->
          <div
            v-if="!query.trim()"
            class="flex flex-col items-center justify-center gap-3 pt-20 pb-8 px-6 text-center select-none"
          >
            <div class="w-14 h-14 rounded-full bg-neutral-gray/20 flex items-center justify-center mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-7 h-7 text-neutral-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <p class="text-sm text-neutral-500 leading-relaxed">
              Search across all cheatsheets,<br />sections, and topics.
            </p>
          </div>

          <!-- No results -->
          <div
            v-else-if="searchResults.length === 0"
            class="flex flex-col items-center justify-center gap-3 pt-20 pb-8 px-6 text-center select-none"
          >
            <div class="w-14 h-14 rounded-full bg-neutral-gray/20 flex items-center justify-center mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-7 h-7 text-neutral-700"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <p class="text-sm text-neutral-500">
              No results for
              <strong class="text-neutral-300 font-semibold">"{{ query }}"</strong>
            </p>
          </div>

          <!-- Results -->
          <template v-else>
            <!-- Cheatsheets group -->
            <div v-if="topicResults.length > 0">
              <div
                class="px-4 pt-5 pb-2 text-[10px] font-semibold uppercase tracking-widest text-neutral-500 flex items-center gap-1.5"
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
                Cheatsheets
              </div>
              <button
                v-for="item in topicResults"
                :key="item.lang"
                data-result-item
                @click="navigateToTopic(item.lang)"
                @touchstart="selectedIndex = getItemIndex('topic', item.lang)"
                class="w-full text-left px-4 py-4 text-sm transition-colors focus:outline-none flex items-center gap-4 active:bg-neutral-gray/20"
                :class="
                  selectedIndex === getItemIndex('topic', item.lang)
                    ? 'text-primary-lightgreen bg-neutral-gray/20'
                    : 'text-neutral-300'
                "
              >
                <div
                  class="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 bg-neutral-gray/30"
                >
                  <img
                    :src="refTopics[item.lang]?.icon"
                    :alt="item.label"
                    class="w-5 h-5 object-contain"
                  />
                </div>
                <span class="flex-1 font-medium" v-html="highlight(item.label, query.trim())" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4 opacity-30 shrink-0"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

            <!-- Sections group -->
            <div v-if="sectionResults.length > 0">
              <div
                class="px-4 pb-2 text-[10px] font-semibold uppercase tracking-widest text-neutral-500 flex items-center gap-1.5"
                :class="topicResults.length > 0 ? 'pt-5 border-t border-neutral-gray/50 mt-2' : 'pt-5'"
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
                @touchstart="selectedIndex = getItemIndex('section', item.lang, item.sectionId)"
                class="w-full text-left px-4 py-3.5 text-sm transition-colors focus:outline-none flex items-start gap-4 active:bg-neutral-gray/20"
                :class="
                  selectedIndex === getItemIndex('section', item.lang, item.sectionId)
                    ? 'bg-neutral-gray/20'
                    : ''
                "
              >
                <div
                  class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-neutral-gray/30 mt-0.5"
                >
                  <img
                    :src="refTopics[item.lang]?.icon"
                    :alt="item.langLabel"
                    class="w-4.5 h-4.5 object-contain"
                  />
                </div>
                <div class="flex-1 min-w-0">
                  <div
                    class="font-medium truncate transition-colors"
                    :class="
                      selectedIndex === getItemIndex('section', item.lang, item.sectionId)
                        ? 'text-primary-lightgreen'
                        : 'text-neutral-200'
                    "
                    v-html="highlight(item.sectionTitle, query.trim())"
                  />
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
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-4 h-4 mt-0.5 opacity-25 shrink-0"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

            <!-- Bottom padding so last item isn't right at edge -->
            <div class="h-10" />
          </template>
        </div>
      </div>
    </Transition>
  </Teleport>

  <!-- ─── Desktop: Inline search + dropdown ──────────────────────────────────── -->
  <div class="hidden md:block relative group">
    <div
      class="flex items-center rounded-md transition-all duration-300 overflow-hidden px-3 py-1.5 cursor-text"
      :class="
        isFocused
          ? 'bg-neutral-black border border-primary-lightgreen'
          : 'bg-neutral-black border border-neutral-gray'
      "
      @click="searchInput?.focus()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-4 h-4 transition-colors shrink-0 mr-2"
        :class="isFocused ? 'text-primary-lightgreen' : 'text-neutral-400'"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>

      <input
        ref="searchInput"
        v-model="query"
        type="text"
        placeholder="Search..."
        class="bg-transparent text-sm text-white placeholder-neutral-500 outline-none w-40 lg:w-56 opacity-100"
        @focus="isFocused = true"
        @blur="handleBlur"
        @keydown.enter="handleEnter"
        @keydown.down="handleArrowDown"
        @keydown.up="handleArrowUp"
        @keydown.esc="searchInput?.blur()"
      />

      <div
        class="flex items-center justify-center w-5 h-5 rounded border border-neutral-gray bg-neutral-gray/20 text-[10px] text-neutral-400 ml-2 shrink-0"
        title="Press / to search"
      >
        /
      </div>
    </div>

    <!-- Desktop dropdown -->
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
        class="absolute top-full right-0 mt-2 w-96 bg-neutral-black border border-neutral-gray rounded-lg shadow-2xl overflow-hidden z-60"
      >
        <div
          ref="resultsListRef"
          class="overflow-y-auto no-scrollbar"
          :style="{ maxHeight: dropdownMaxHeight }"
        >
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
            <!-- Cheatsheets group -->
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
                Cheatsheets
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
                <div class="w-6 h-6 rounded flex items-center justify-center shrink-0 bg-neutral-gray/30">
                  <img :src="refTopics[item.lang]?.icon" :alt="item.label" class="w-4 h-4 object-contain" />
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
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

            <!-- Sections group -->
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
                  <div
                    class="font-medium truncate transition-colors"
                    :class="
                      selectedIndex === getItemIndex('section', item.lang, item.sectionId)
                        ? 'text-primary-lightgreen'
                        : 'text-neutral-200'
                    "
                    v-html="highlight(item.sectionTitle, query.trim())"
                  />
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
                  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

            <!-- Footer keyboard hints -->
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

/* Mobile overlay slide-in animation */
.mobile-search-enter-active {
  transition: opacity 0.18s ease, transform 0.2s ease;
}
.mobile-search-leave-active {
  transition: opacity 0.14s ease, transform 0.16s ease;
}
.mobile-search-enter-from,
.mobile-search-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
