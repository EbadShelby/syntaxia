<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SearchBar from '@/components/SearchBar.vue'
</script>

<template>
  <!-- Sticky header with home icon + language nav -->
  <header
    class="sticky top-0 z-50 border-b border-neutral-gray bg-neutral-black/90 backdrop-blur-sm"
  >
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Home icon & Wordmark -->
      <RouterLink to="/" class="flex items-center gap-2.5 group">
        <div
          class="flex items-center justify-center w-9 h-9 border border-neutral-gray rounded-md group-hover:border-primary-lightgreen transition-colors bg-neutral-black"
        >
          <img src="/syntaxia.png" alt="Syntaxia" class="w-6 h-6 object-contain" />
        </div>
        <span
          class="text-white font-fun text-lg tracking-widest group-hover:glow-text transition-all hidden sm:block"
        >
          SYNTAXIA
        </span>
      </RouterLink>

      <!-- Right section: Search + GitHub -->
      <div class="flex items-center gap-4 md:gap-6">
        <SearchBar />

        <!-- GitHub Star -->
        <a
          href="https://github.com/EbadShelby/syntaxia"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1.5 px-2.5 py-1 text-xs font-base text-neutral-400 hover:text-white border border-neutral-gray rounded-md hover:border-neutral-500 transition-colors bg-neutral-black"
        >
          <img src="/github_dark.svg" alt="GitHub" class="w-4 h-4 opacity-80" />
          <span>Star</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-3.5 h-3.5 text-yellow-500/90"
          >
            <path
              fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>
