<script setup lang="ts">
import { ref, computed } from 'vue'
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
  {
    lang: 'csharp',
    label: 'C#',
    icon: '/csharp.svg',
    color: '#68217A',
    badge: 'Programming Language',
    desc: 'A modern, object-oriented, and type-safe programming language.',
  },
  {
    lang: 'java',
    label: 'Java',
    icon: '/java.svg',
    color: '#5382A1',
    badge: 'Programming Language',
    desc: 'A class-based, object-oriented programming language.',
  },
  {
    lang: 'postgresql',
    label: 'PostgreSQL',
    icon: '/postgresql.svg',
    color: '#336791',
    badge: 'Database',
    desc: 'A powerful, open source object-relational database system.',
  },
  {
    lang: 'mongodb',
    label: 'MongoDB',
    icon: '/mongodb-icon-dark.svg',
    color: '#47A248',
    badge: 'Database',
    desc: 'The application data platform for modern applications.',
  },
  {
    lang: 'cpp',
    label: 'C++',
    icon: '/c-plusplus.svg',
    color: '#00599C',
    badge: 'Programming Language',
    desc: 'A powerful, high-performance programming language.',
  },
  {
    lang: 'jquery',
    label: 'jQuery',
    icon: '/jquery.svg',
    color: '#0769AD',
    badge: 'Library',
    desc: 'A fast, small, and feature-rich JavaScript library.',
  },
]

const categories = ['All', ...new Set(languages.map((l) => l.badge))]
const selectedCategory = ref('All')

const filteredLanguages = computed(() => {
  if (selectedCategory.value === 'All') return languages
  return languages.filter((l) => l.badge === selectedCategory.value)
})

const scrollContainer = ref<HTMLElement | null>(null)

const scrollLeft = () => {
  if (scrollContainer.value) {
    const scrollAmount = scrollContainer.value.clientWidth * 0.8
    scrollContainer.value.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  if (scrollContainer.value) {
    const scrollAmount = scrollContainer.value.clientWidth * 0.8
    scrollContainer.value.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }
}
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
            class="text-white font-fun text-lg tracking-widest group-hover:glow-text transition-all"
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
      <div class="text-center mb-10 md:mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Explore Topics</h2>
        <p class="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto">
          Dive into our comprehensive references and master your favorite tools and languages.
        </p>
      </div>

      <!-- Filter Categories -->
      <div class="relative max-w-full mx-auto mb-10 flex items-center">
        <!-- Left Arrow -->
        <button
          @click="scrollLeft"
          class="absolute left-0 z-10 w-12 h-full flex items-center justify-start bg-gradient-to-r from-neutral-black via-neutral-black/80 to-transparent text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="w-5 h-5 ml-1"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <!-- Categories Container -->
        <div
          ref="scrollContainer"
          class="flex overflow-x-auto no-scrollbar gap-3 px-10 py-2 scroll-smooth w-full"
        >
          <button
            v-for="cat in categories"
            :key="cat"
            @click="selectedCategory = cat"
            class="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border cursor-pointer select-none"
            :class="[
              selectedCategory === cat
                ? 'bg-primary-lightgreen text-white border-primary-lightgreen shadow-[0_0_15px_rgba(0,129,112,0.4)]'
                : 'bg-neutral-gray/10 text-neutral-400 border-neutral-gray/50 hover:bg-neutral-gray/30 hover:text-neutral-200',
            ]"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Right Arrow -->
        <button
          @click="scrollRight"
          class="absolute right-0 z-10 w-12 h-full flex items-center justify-end bg-gradient-to-l from-neutral-black via-neutral-black/80 to-transparent text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="w-5 h-5 mr-1"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <RouterLink
          v-for="item in filteredLanguages"
          :key="item.lang"
          :to="`/ref/${item.lang}`"
          class="group relative rounded-2xl p-6 bg-neutral-gray/10 border border-neutral-gray block overflow-hidden"
          :style="{ '--theme-color': item.color }"
        >
          <!-- Border Highlight -->
          <div
            class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl border pointer-events-none"
            :style="{ borderColor: 'var(--theme-color)' }"
          ></div>

          <div class="relative z-10 flex flex-col h-full">
            <!-- Top row: Icon + Badge -->
            <div class="flex items-start justify-between mb-6">
              <div
                class="w-14 h-14 flex items-center justify-center rounded-xl bg-neutral-black border border-neutral-gray/50 transition-colors duration-300 group-hover:border-(--theme-color) shadow-md relative"
              >
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
                class="text-sm text-neutral-400 leading-relaxed line-clamp-3"
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
        <span class="font-fun text-white tracking-widest text-base">SYNTAXIA</span>
        <p class="text-xs text-center sm:text-right">
          &copy; 2025 Ebad Yasser. All Rights Reserved.
        </p>
      </div>
    </footer>
  </div>
</template>
