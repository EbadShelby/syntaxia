<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SearchBar from '@/components/SearchBar.vue'

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
  {
    lang: 'tailwind',
    label: 'Tailwind',
    icon: '/tailwindcss.svg',
    color: '#38bdf8',
    badge: 'CSS Framework',
    desc: 'Rapidly build modern websites without ever leaving your HTML.',
  },
  {
    lang: 'vue',
    label: 'Vue',
    icon: '/vue.svg',
    color: '#41b883',
    badge: 'JavaScript Framework',
    desc: 'The Progressive JavaScript Framework for building user interfaces.',
  },
  {
    lang: 'git',
    label: 'Git',
    icon: '/git.svg',
    color: '#f14e32',
    badge: 'Version Control',
    desc: 'Track changes, collaborate, and manage your code history efficiently.',
  },
  {
    lang: 'laravel',
    label: 'Laravel',
    icon: '/laravel.svg',
    color: '#ff2d20',
    badge: 'PHP Framework',
    desc: 'The PHP framework for web artisans with expressive, elegant syntax.',
  },
  {
    lang: 'react',
    label: 'React',
    icon: '/react_dark.svg',
    color: '#61DAFB',
    badge: 'JavaScript Library',
    desc: 'The library for web and native user interfaces.',
  },
  {
    lang: 'motion',
    label: 'Motion',
    icon: '/motion_dark.svg',
    color: '#FF00A2',
    badge: 'Animation Library',
    desc: 'A production-ready motion library for React.',
  },
  {
    lang: 'bootstrap',
    label: 'Bootstrap',
    icon: '/bootstrap.svg',
    color: '#7952B3',
    badge: 'CSS Framework',
    desc: 'Powerful, extensible, and feature-packed frontend toolkit.',
  },
  {
    lang: 'nodejs',
    label: 'Node.js',
    icon: '/nodejs.svg',
    color: '#339933',
    badge: 'JavaScript Runtime',
    desc: 'An asynchronous event-driven JavaScript runtime.',
  },
  {
    lang: 'python',
    label: 'Python',
    icon: '/python.svg',
    color: '#3776AB',
    badge: 'Programming Language',
    desc: 'A versatile, high-level programming language.',
  },
  {
    lang: 'angular',
    label: 'Angular',
    icon: '/angular.svg',
    color: '#DD0031',
    badge: 'Web Framework',
    desc: "The modern web developer's platform.",
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
        <RouterLink to="/" class="flex items-center gap-2.5 group">
          <div
            class="flex items-center justify-center w-9 h-9 border border-neutral-gray rounded-md group-hover:border-primary-lightgreen transition-colors bg-neutral-black"
          >
            <img src="/syntaxia.png" alt="Syntaxia" class="w-6 h-6 object-contain" />
          </div>
          <span
            class="text-primary-lightgreen font-fun text-lg tracking-widest group-hover:glow-text transition-all"
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
    <section id="topics" class="max-w-6xl mx-auto px-4 py-10 md:py-20">
      <div class="text-center mb-10 md:mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Explore Topics</h2>
        <p class="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
          Dive into our comprehensive references and master your favorite tools and languages.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <RouterLink
          v-for="item in languages"
          :key="item.lang"
          :to="`/ref/${item.lang}`"
          class="group relative rounded-2xl p-6 bg-neutral-gray/10 border border-neutral-gray block overflow-hidden transition-all duration-300 hover:-translate-y-1"
          :style="{ '--theme-color': item.color }"
        >
          <!-- Dynamic Glow Shadow -->
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
            :style="{ boxShadow: `0 12px 40px -12px ${item.color}60` }"
          ></div>

          <!-- Top Right Gradient Glow -->
          <div
            class="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-full blur-3xl pointer-events-none -mr-10 -mt-10"
            :style="{ backgroundColor: 'var(--theme-color)' }"
          ></div>

          <!-- Border Highlight -->
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl border pointer-events-none"
            :style="{ borderColor: 'var(--theme-color)' }"
          ></div>

          <div class="relative z-10 flex flex-col h-full">
            <!-- Top row: Icon + Badge -->
            <div class="flex items-start justify-between mb-6">
              <div
                class="w-14 h-14 flex items-center justify-center rounded-xl bg-neutral-black border border-neutral-gray/50 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-md relative"
              >
                <!-- Subtle icon glow -->
                <div
                  class="absolute inset-0 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"
                  :style="{ backgroundColor: 'var(--theme-color)' }"
                ></div>
                <img
                  :src="item.icon"
                  :alt="item.label"
                  class="w-8 h-8 object-contain relative z-10"
                />
              </div>

              <span
                class="px-3 py-1 text-[11px] font-bold uppercase tracking-widest rounded-full border border-neutral-gray/50 bg-neutral-black/50 text-neutral-400 transition-colors duration-300 group-hover:text-white group-hover:border-(--theme-color)"
              >
                {{ item.badge }}
              </span>
            </div>

            <!-- Title & Description -->
            <div class="grow">
              <h3
                class="text-2xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-(--theme-color)"
              >
                {{ item.label }}
              </h3>
              <p
                class="text-sm text-neutral-400 leading-relaxed line-clamp-3 group-hover:text-neutral-300 transition-colors"
              >
                {{ item.desc }}
              </p>
            </div>
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
