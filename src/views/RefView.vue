<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { refTopics } from '@/data/refContent'
import AppHeader from '@/components/AppHeader.vue'
import AppSidebar from '@/components/AppSidebar.vue'
import CodeBlock from '@/components/CodeBlock.vue'

const route = useRoute()
const router = useRouter()

const lang = computed(() => route.params.lang as string)
const topic = computed(() => refTopics[lang.value])

// If lang not found, redirect home
watch(
  topic,
  (t) => {
    if (!t) router.replace('/')
  },
  { immediate: true },
)

const sections = computed(() =>
  topic.value?.sections.map((s) => ({ id: s.id, title: s.title })) ?? [],
)

// Mobile TOC drawer
const tocOpen = ref(false)
function toggleToc() {
  tocOpen.value = !tocOpen.value
}
function closeToc() {
  tocOpen.value = false
}

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  closeToc()
}
</script>

<template>
  <div v-if="topic" class="min-h-screen bg-neutral-black text-white">
    <!-- Sticky header with language tabs -->
    <AppHeader />

    <!-- Mobile: sticky TOC toggle bar -->
    <div class="lg:hidden sticky top-[4rem] z-40 flex items-center justify-between px-4 py-2.5 border-b border-neutral-gray bg-neutral-black/95 backdrop-blur-sm">
      <span class="text-xs text-neutral-500 font-base uppercase tracking-widest">{{ topic.label }} Reference</span>
      <button
        @click="toggleToc"
        class="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-primary-lightgreen transition-colors cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
        Contents
      </button>
    </div>

    <!-- Mobile TOC drawer overlay -->
    <Transition name="slide-down">
      <div
        v-if="tocOpen"
        class="lg:hidden fixed inset-0 z-50 flex flex-col"
        @click.self="closeToc"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/60" @click="closeToc"></div>

        <!-- Drawer -->
        <div class="relative mt-auto bg-neutral-black border-t border-neutral-gray max-h-[70vh] overflow-y-auto no-scrollbar">
          <div class="flex items-center justify-between px-4 py-3 border-b border-neutral-gray">
            <h3 class="text-sm font-bold text-primary-lightgreen uppercase tracking-wider">Contents</h3>
            <button @click="closeToc" class="text-neutral-400 hover:text-white transition-colors cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul class="p-4 space-y-1">
            <li v-for="section in sections" :key="section.id">
              <button
                @click="scrollToSection(section.id)"
                class="w-full text-left px-3 py-2 text-sm text-neutral-400 hover:text-white hover:bg-neutral-gray/30 rounded transition-colors cursor-pointer"
              >
                {{ section.title }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Transition>

    <!-- Page body -->
    <div class="flex flex-col lg:flex-row max-w-screen-xl mx-auto">
      <!-- ─── Main content ─────────────────────────────── -->
      <main class="flex-1 px-4 py-6 lg:px-8 lg:py-8 min-w-0 lg:border-r border-neutral-gray">
        <!-- Title -->
        <div class="flex items-center gap-3 mb-8 pb-6 border-b border-neutral-gray">
          <div
            class="w-11 h-11 md:w-14 md:h-14 flex items-center justify-center rounded-lg border border-neutral-gray bg-neutral-gray/20 shrink-0"
          >
            <img :src="topic.icon" :alt="topic.label" class="w-7 h-7 md:w-9 md:h-9 object-contain" />
          </div>
          <div>
            <p class="text-xs text-neutral-500 font-base uppercase tracking-widest mb-0.5">
              Reference
            </p>
            <h1 class="text-2xl md:text-4xl font-bold font-fun tracking-wide leading-tight">
              {{ topic.title }}
            </h1>
          </div>
        </div>

        <!-- Content sections -->
        <div class="ref-content">
          <section
            v-for="section in topic.sections"
            :key="section.id"
            :id="section.id"
          >
            <h2>{{ section.title }}</h2>
            <p>{{ section.description }}</p>
            <CodeBlock :code="section.code" :language="section.language" />
          </section>
        </div>

        <!-- Footer -->
        <footer class="mt-12 pt-6 border-t border-neutral-gray text-center text-xs text-neutral-500 pb-8">
          <p>&copy; 2025 Ebad Yasser. All Rights Reserved.</p>
        </footer>
      </main>

      <!-- ─── Sidebar TOC (desktop only) ──────────────── -->
      <AppSidebar :sections="sections" />
    </div>
  </div>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: opacity 0.2s ease;
}
.slide-down-enter-active .relative,
.slide-down-leave-active .relative {
  transition: transform 0.25s ease;
}
.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
}
.slide-down-enter-from .relative {
  transform: translateY(100%);
}
</style>
