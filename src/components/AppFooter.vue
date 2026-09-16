<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const footerRef = ref<HTMLElement | null>(null)
const showPopup = ref(false)
const hasDismissed = ref(false)

onMounted(() => {
  hasDismissed.value = localStorage.getItem('syntaxia_dismissed_request_popup') === 'true'

  if (hasDismissed.value) return

  const observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries
      if (entry?.isIntersecting && !hasDismissed.value) {
        showPopup.value = true
      } else {
        showPopup.value = false
      }
    },
    { threshold: 0.1 },
  )

  if (footerRef.value) {
    observer.observe(footerRef.value)
  }

  onUnmounted(() => {
    observer.disconnect()
  })
})

const dismissPopup = () => {
  showPopup.value = false
  hasDismissed.value = true
  localStorage.setItem('syntaxia_dismissed_request_popup', 'true')
}
</script>

<template>
  <footer
    ref="footerRef"
    class="w-full border-t border-neutral-gray mt-8 py-8 relative overflow-hidden"
  >
    <div
      class="w-full flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-500"
    >
      <div class="flex flex-col items-center md:items-start gap-1">
        <span class="font-fun text-white tracking-widest text-lg group cursor-default">
          <span class="group-hover:glow-text transition-all duration-300">SYNTAXIA</span>
        </span>
        <p class="text-xs">
          &copy; {{ new Date().getFullYear() }} Ebad Yasser. All Rights Reserved.
        </p>
      </div>

      <div class="flex flex-wrap items-center justify-center gap-4 md:gap-6">
        <a
          href="https://github.com/EbadShelby/syntaxia/issues/new?title=[Feedback]%20"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1.5 text-neutral-400 hover:text-primary-lightgreen transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
            />
          </svg>
          Feedback
        </a>
        <a
          href="https://github.com/EbadShelby/syntaxia/issues/new?title=[Cheatsheet%20Request]%20"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1.5 text-neutral-400 hover:text-primary-lightgreen transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
            />
          </svg>
          Request Cheatsheet
        </a>
        <a
          href="https://github.com/EbadShelby/syntaxia/issues/new?title=[Bug%20Report]%20"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1.5 text-neutral-400 hover:text-primary-lightgreen transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          Report Issue
        </a>
      </div>
    </div>

    <!-- Request Cheatsheet Popup -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform translate-y-8 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform translate-y-8 opacity-0"
    >
      <div
        v-if="showPopup"
        class="fixed bottom-6 right-6 z-60 p-4 bg-neutral-black/95 backdrop-blur-md border border-primary-lightgreen rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.15)] flex flex-col gap-3 max-w-70"
      >
        <button
          @click="dismissPopup"
          class="absolute top-2 right-2 text-neutral-400 hover:text-white transition-colors p-1"
          aria-label="Close popup"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-4 h-4"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div class="pr-6">
          <p class="text-sm text-neutral-200 mb-1 font-semibold">Missing a cheatsheet?</p>
          <p class="text-xs text-neutral-400">Let us know what you'd like to see next!</p>
        </div>

        <a
          href="https://github.com/EbadShelby/syntaxia/issues/new?title=[Cheatsheet%20Request]%20"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center gap-2 px-4 py-2 mt-1 bg-primary-green hover:bg-primary-green/90 text-neutral-black text-xs font-bold rounded transition-colors"
        >
          Request Cheatsheet
        </a>
      </div>
    </Transition>
  </footer>
</template>
