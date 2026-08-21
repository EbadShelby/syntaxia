<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { refNavItems } from '@/data/refContent'

const query = ref('')
const isFocused = ref(false)
const searchInput = ref<HTMLInputElement | null>(null)
const router = useRouter()

const searchResults = computed(() => {
  if (!query.value.trim()) return refNavItems
  return refNavItems.filter((item) =>
    item.label.toLowerCase().includes(query.value.toLowerCase())
  )
})

const handleKeydown = (e: KeyboardEvent) => {
  // Focus on '/' press, unless they are already in an input/textarea
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
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})

const navigateTo = (lang: string) => {
  query.value = ''
  isFocused.value = false
  searchInput.value?.blur()
  router.push(`/ref/${lang}`)
}

const handleEnter = () => {
  if (searchResults.value.length > 0 && searchResults.value[0]) {
    navigateTo(searchResults.value[0].lang)
  }
}

// Handle clicking outside to close
const handleBlur = () => {
  // Give time for click event on dropdown to fire before hiding
  setTimeout(() => {
    isFocused.value = false
  }, 150)
}
</script>

<template>
  <div class="relative group">
    <div
      class="flex items-center rounded-md transition-all duration-300 overflow-hidden"
      :class="isFocused ? 'bg-neutral-black border border-primary-lightgreen px-3 py-1.5 cursor-text' : 'bg-transparent border border-transparent md:bg-neutral-black md:border-neutral-gray p-2 md:px-3 md:py-1.5 cursor-pointer md:cursor-text'"
      @click="searchInput?.focus()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-5 h-5 md:w-4 md:h-4 transition-colors"
        :class="isFocused ? 'text-primary-lightgreen mr-2' : 'text-neutral-400 hover:text-white md:hover:text-neutral-400 md:mr-2'"
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
        placeholder="Search topics..."
        class="bg-transparent text-sm text-white placeholder-neutral-500 outline-none transition-all duration-300"
        :class="isFocused ? 'w-32 md:w-48 lg:w-64 opacity-100' : 'w-0 md:w-48 lg:w-64 opacity-0 md:opacity-100'"
        @focus="isFocused = true"
        @blur="handleBlur"
        @keydown.enter="handleEnter"
        @keydown.esc="searchInput?.blur()"
      />
      <div
        class="hidden md:flex items-center justify-center w-5 h-5 rounded border border-neutral-gray bg-neutral-gray/20 text-[10px] text-neutral-400 ml-2"
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
        v-if="isFocused"
        class="absolute top-full left-0 mt-2 w-full bg-neutral-black border border-neutral-gray rounded-md shadow-lg overflow-hidden z-50"
      >
        <ul v-if="searchResults.length > 0" class="max-h-60 overflow-y-auto no-scrollbar">
          <li v-for="item in searchResults" :key="item.lang">
            <button
              @click="navigateTo(item.lang)"
              class="w-full text-left px-4 py-2 text-sm text-neutral-300 hover:text-primary-lightgreen hover:bg-neutral-gray/20 transition-colors focus:bg-neutral-gray/20 outline-none block"
            >
              {{ item.label }}
            </button>
          </li>
        </ul>
        <div v-else class="px-4 py-3 text-sm text-neutral-500 text-center">
          No topics found.
        </div>
      </div>
    </Transition>
  </div>
</template>
