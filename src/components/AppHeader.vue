<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { refNavItems } from '@/data/refContent'

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
        class="flex items-center justify-center w-9 h-9 border border-neutral-gray rounded-md hover:border-primary-lightgreen transition-colors bg-neutral-black"
        title="Back to Home"
      >
        <img src="/syntaxia.png" alt="Syntaxia" class="w-6 h-6 object-contain" />
      </RouterLink>

      <!-- Language tabs — desktop -->
      <nav class="hidden md:block">
        <ul class="flex gap-1">
          <li v-for="item in refNavItems" :key="item.lang">
            <RouterLink
              :to="`/ref/${item.lang}`"
              class="px-3 py-2 text-sm transition-all block rounded border-b-2 border-dashed"
              :class="
                currentLang === item.lang
                  ? 'text-primary-lightgreen border-primary-lightgreen'
                  : 'text-neutral-400 hover:text-white border-transparent'
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
        v-for="item in refNavItems"
        :key="item.lang"
        :to="`/ref/${item.lang}`"
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
