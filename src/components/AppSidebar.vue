<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface SidebarSection {
  id: string
  title: string
}

const props = defineProps<{
  sections: SidebarSection[]
}>()

const activeId = ref<string>(props.sections[0]?.id ?? '')

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id
        }
      }
    },
    { rootMargin: '-20% 0px -60% 0px', threshold: 0 },
  )

  props.sections.forEach(({ id }) => {
    const el = document.getElementById(id)
    if (el) observer!.observe(el)
  })
})

onUnmounted(() => {
  observer?.disconnect()
})

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    activeId.value = id
  }
}
</script>

<template>
  <aside
    class="hidden lg:block no-scrollbar w-64 xl:w-72 shrink-0 border-l border-neutral-gray p-5 sticky top-[4rem] h-[calc(100vh-4rem)] overflow-y-auto bg-neutral-black/50"
  >
    <div>
      <h3 class="font-bold text-sm text-primary-lightgreen mb-4 uppercase tracking-wider">
        Contents
      </h3>
      <ul class="space-y-1 text-sm">
        <li v-for="section in sections" :key="section.id">
          <button
            @click="scrollTo(section.id)"
            class="w-full text-left block pl-3 py-1.5 rounded-sm border-l-2 transition-all duration-200 cursor-pointer"
            :class="
              activeId === section.id
                ? 'border-primary-lightgreen text-white bg-primary-lightgreen/5'
                : 'border-transparent text-neutral-500 hover:text-neutral-300 hover:border-neutral-600'
            "
          >
            {{ section.title }}
          </button>
        </li>
      </ul>
    </div>
  </aside>
</template>
