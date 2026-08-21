<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { learnNavItems } from '@/data/learnContent'

const route = useRoute()
const currentLang = computed(() => route.params.lang as string)
</script>

<template>
  <!-- Sticky header with home icon + language nav -->
  <header
    class="sticky top-0 z-50 border-b border-neutral-gray bg-neutral-black/90 backdrop-blur-sm"
  >
    <div class="flex items-center justify-between px-4 py-3">
      <!-- Home icon -->
      <RouterLink
        to="/"
        class="text-neutral-400 hover:text-primary-lightgreen transition-colors"
        title="Back to Home"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </RouterLink>

      <!-- Language tabs — desktop -->
      <nav class="hidden md:block">
        <ul class="flex gap-1">
          <li v-for="item in learnNavItems" :key="item.lang">
            <RouterLink
              :to="`/learn/${item.lang}`"
              class="px-3 py-2 text-sm transition-all block rounded"
              :class="
                currentLang === item.lang
                  ? 'text-primary-lightgreen border-b-2 border-dashed border-primary-lightgreen'
                  : 'text-neutral-400 hover:text-white'
              "
            >
              {{ item.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <!-- Current page label (mobile) -->
      <span class="md:hidden text-sm font-bold font-base text-primary-lightgreen uppercase">
        {{ currentLang }}
      </span>
    </div>

    <!-- Mobile nav — horizontal scroll tabs -->
    <div
      class="md:hidden flex gap-1 overflow-x-auto no-scrollbar px-4 pb-2 border-t border-neutral-gray"
    >
      <RouterLink
        v-for="item in learnNavItems"
        :key="item.lang"
        :to="`/learn/${item.lang}`"
        class="whitespace-nowrap text-xs px-3 py-1.5 rounded transition-colors shrink-0"
        :class="
          currentLang === item.lang
            ? 'text-primary-lightgreen bg-neutral-gray/40 border border-primary-lightgreen/40'
            : 'text-neutral-400 hover:text-white'
        "
      >
        {{ item.label }}
      </RouterLink>
    </div>
  </header>
</template>
