<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const menuOpen = ref(false)

const languages = [
  {
    lang: 'html',
    label: 'HTML',
    icon: '/html5.svg',
    color: '#e34c26',
    badge: 'Markup',
    desc: 'The backbone of every webpage. Structure your content with semantic elements.',
  },
  {
    lang: 'css',
    label: 'CSS',
    icon: '/css.svg',
    color: '#264de4',
    badge: 'Styling',
    desc: 'Style, animate, and layout your pages with modern CSS features.',
  },
  {
    lang: 'js',
    label: 'JavaScript',
    icon: '/javascript.svg',
    color: '#f7df1e',
    badge: 'Scripting',
    desc: 'Add interactivity, fetch data, and build dynamic user interfaces.',
  },
  {
    lang: 'php',
    label: 'PHP',
    icon: '/Php_dark.svg',
    color: '#777bb4',
    badge: 'Backend',
    desc: 'Server-side scripting to handle forms, sessions, and databases.',
  },
  {
    lang: 'mysql',
    label: 'MySQL',
    icon: '/MySQL_dark.svg',
    color: '#00758f',
    badge: 'Database',
    desc: 'Store, retrieve, and manage data with structured SQL queries.',
  },
]
</script>

<template>
  <div class="min-h-screen bg-neutral-black text-white">
    <!-- ─── Nav ─────────────────────────────────────────── -->
    <header
      class="sticky top-0 z-50 border-b border-neutral-gray bg-neutral-black/80 backdrop-blur-md"
    >
      <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <RouterLink to="/" class="flex items-center gap-2 group">
          <img src="/syntaxia.png" alt="Syntaxia" class="w-7 h-7 object-contain" />
          <span
            class="text-primary-lightgreen font-fun text-lg tracking-widest group-hover:glow-text transition-all"
          >
            SYN<span class="text-white">TAXIA</span>
          </span>
        </RouterLink>

        <!-- Desktop nav links -->
        <nav class="hidden md:flex items-center gap-5 text-sm text-neutral-400">
          <RouterLink
            v-for="item in languages"
            :key="item.lang"
            :to="`/ref/${item.lang}`"
            class="hover:text-primary-lightgreen transition-colors"
          >
            {{ item.label }}
          </RouterLink>
        </nav>

        <!-- Mobile hamburger -->
        <button
          @click="menuOpen = !menuOpen"
          class="md:hidden text-neutral-400 hover:text-white transition-colors cursor-pointer p-1"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        >
          <!-- Hamburger icon -->
          <svg
            v-if="!menuOpen"
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <!-- Close icon -->
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile dropdown menu -->
      <Transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <nav v-if="menuOpen" class="md:hidden border-t border-neutral-gray">
          <RouterLink
            v-for="item in languages"
            :key="item.lang"
            :to="`/ref/${item.lang}`"
            @click="menuOpen = false"
            class="flex items-center gap-3 px-4 py-3 text-sm text-neutral-300 hover:text-primary-lightgreen hover:bg-neutral-gray/20 transition-colors border-b border-neutral-gray/40 last:border-b-0"
          >
            <img :src="item.icon" :alt="item.label" class="w-4 h-4 object-contain opacity-80" />
            <span>{{ item.label }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 ml-auto text-neutral-600"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </RouterLink>
        </nav>
      </Transition>
    </header>

    <!-- ─── Hero ─────────────────────────────────────────── -->
    <section class="relative overflow-hidden border-b border-neutral-gray">
      <!-- Grid overlay -->
      <div
        class="absolute inset-0 opacity-[0.04]"
        style="
          background-image:
            linear-gradient(rgba(0, 129, 112, 1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 129, 112, 1) 1px, transparent 1px);
          background-size: 40px 40px;
        "
      ></div>

      <!-- Glow orb -->
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-96 h-72 md:h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style="background: radial-gradient(circle, #008170 0%, transparent 70%)"
      ></div>

      <div class="relative max-w-6xl mx-auto px-4 py-16 md:py-28 text-center">
        <!-- Label -->
        <div
          class="inline-flex items-center gap-2 border border-neutral-gray bg-neutral-gray/30 px-3 py-1 rounded-full text-xs text-neutral-400 mb-6 md:mb-8 font-base"
        >
          <span class="w-1.5 h-1.5 rounded-full bg-primary-lightgreen animate-pulse"></span>
          Your personal coding reference
        </div>

        <!-- Main headline -->
        <h1
          class="text-4xl sm:text-5xl md:text-7xl font-bold font-fun tracking-widest mb-4 md:mb-6 leading-none"
        >
          <span class="glow-text">SYNTAXIA</span>
        </h1>

        <!-- Tagline -->
        <p
          class="text-neutral-400 text-base md:text-xl max-w-sm md:max-w-xl mx-auto mb-8 md:mb-10 leading-relaxed"
        >
          A quick reference for the things you always look up.
          <span class="text-neutral-500 text-sm md:text-base block mt-2"
            >Pick a topic and start referencing.</span
          >
        </p>

        <!-- CTA -->
        <a
          href="#topics"
          class="inline-flex items-center gap-2 px-6 py-3 border border-neutral-gray text-neutral-300 text-sm rounded hover:border-primary-lightgreen hover:text-primary-lightgreen transition-all active:scale-95"
        >
          Browse References
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4 animate-bounce"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </a>
      </div>
    </section>

    <!-- ─── Language Cards ─────────────────── -->
    <section id="topics" class="max-w-6xl mx-auto px-4 py-10 md:py-16">
      <div class="text-center mb-8 md:mb-12">
        <h2 class="text-xl md:text-2xl font-bold text-white mb-1">Pick a Topic</h2>
        <p class="text-neutral-500 text-sm">Browse all available references below</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <RouterLink
          v-for="item in languages"
          :key="item.lang"
          :to="`/ref/${item.lang}`"
          class="card-glow group relative border border-neutral-gray rounded-lg p-5 bg-neutral-gray/10 hover:bg-neutral-gray/20 block"
        >
          <!-- Top row -->
          <div class="flex items-start justify-between mb-3">
            <!-- Icon -->
            <div
              class="w-11 h-11 flex items-center justify-center rounded-lg border border-neutral-gray bg-neutral-gray/20 group-hover:scale-110 transition-transform duration-300"
            >
              <img :src="item.icon" :alt="item.label" class="w-6 h-6 object-contain" />
            </div>
            <span
              class="text-[10px] font-base uppercase tracking-widest px-2 py-0.5 rounded border"
              :style="{ color: item.color, borderColor: item.color + '40' }"
            >
              {{ item.badge }}
            </span>
          </div>

          <!-- Title -->
          <h3
            class="text-base font-bold text-white mb-1.5 group-hover:text-primary-lightgreen transition-colors"
          >
            {{ item.label }}
          </h3>

          <!-- Description -->
          <p class="text-neutral-500 text-sm leading-relaxed mb-4">{{ item.desc }}</p>

          <!-- Arrow -->
          <div
            class="flex items-center gap-1 text-xs text-neutral-600 group-hover:text-primary-lightgreen transition-colors font-base"
          >
            <span>Open reference</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </RouterLink>
      </div>
    </section>

    <!-- ─── Footer ─────────────────────────────────────── -->
    <footer class="border-t border-neutral-gray mt-4">
      <div
        class="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-neutral-500"
      >
        <span class="font-fun text-primary-lightgreen tracking-widest text-base">SYNTAXIA</span>
        <p class="text-xs text-center sm:text-right">
          &copy; 2025 Ebad Yasser. All Rights Reserved.
        </p>
      </div>
    </footer>
  </div>
</template>
