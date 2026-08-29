<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { refNavItems, refTopics } from '@/data/refContent'

const query = ref('')
const isFocused = ref(false)
const searchInput = ref<HTMLInputElement | null>(null)
const router = useRouter()

// ── Search index ──────────────────────────────────────────────────────────────
// Flatten all sections from all topics into a searchable index (done once).
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

// ── Computed results ──────────────────────────────────────────────────────────
const MAX_TOPICS = 3
const MAX_SECTIONS = 8

const searchResults = computed<SearchResult[]>(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return []

  // Split into tokens; require ALL tokens to match (AND logic)
  const tokens = q.split(/\s+/).filter(Boolean)

  const topicMatches: TopicResult[] = refNavItems
    .filter((item) => {
      // Include the lang key ("js") so short aliases like "js" match "JavaScript"
      const haystack =
        `${item.lang} ${item.label} ${refTopics[item.lang]?.title ?? ''}`.toLowerCase()
      return tokens.every((t) => haystack.includes(t))
    })
    .slice(0, MAX_TOPICS)
    .map((item) => ({ type: 'topic', lang: item.lang, label: item.label }))

  const sectionMatches: SectionResult[] = sectionIndex
    .filter((s) => {
      // Include lang key (e.g. "js"), short label ("JS"), and full title ("JavaScript")
      // so tokens like "js", "javascript", or "python" all resolve to the right topic
      const haystack =
        `${s.lang} ${s.langLabel} ${s.langTitle} ${s.sectionTitle} ${s.description}`.toLowerCase()
      return tokens.every((t) => haystack.includes(t))
    })
    .slice(0, MAX_SECTIONS)

  return [...topicMatches, ...sectionMatches]
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

// Flat index mapping for keyboard nav (topics first, then sections)
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
      <input
        ref="searchInput"
        v-model="query"
        type="text"
        placeholder="Search topics & sections..."
        class="bg-transparent text-sm text-white placeholder-neutral-500 outline-none transition-all duration-300"
        :class="
          isFocused
            ? 'w-40 md:w-56 lg:w-72 opacity-100'
            : 'w-0 md:w-48 lg:w-64 opacity-0 md:opacity-100'
        "
        @focus="isFocused = true"
        @blur="handleBlur"
        @keydown.enter="handleEnter"
        @keydown.down="handleArrowDown"
        @keydown.up="handleArrowUp"
        @keydown.esc="searchInput?.blur()"
      />
      <div
        class="hidden md:flex items-center justify-center w-5 h-5 rounded border border-neutral-gray bg-neutral-gray/20 text-[10px] text-neutral-400 ml-2 shrink-0"
        title="Press / to search"
      >
        /
      </div>
    </div>

    <!-- Dropdown -->
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
        <div ref="resultsListRef" class="max-h-[420px] overflow-y-auto no-scrollbar">
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
                <!-- Lang badge + icon -->
                <div class="flex items-center gap-1.5 shrink-0 mt-0.5">
                  <div class="w-5 h-5 rounded flex items-center justify-center bg-neutral-gray/30">
                    <img
                      :src="refTopics[item.lang]?.icon"
                      :alt="item.langLabel"
                      class="w-3.5 h-3.5 object-contain"
                    />
                  </div>
                </div>
                <!-- Text -->
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
