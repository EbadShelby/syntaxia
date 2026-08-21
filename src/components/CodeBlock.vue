<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  code: string
  language?: string
}>()

const copied = ref(false)

async function copy() {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    // clipboard API not available
  }
}
</script>

<template>
  <div class="relative group my-4">
    <!-- Language badge + copy button -->
    <div
      class="flex items-center justify-between px-3 py-1.5 bg-neutral-gray/60 border border-neutral-gray rounded-t-md"
    >
      <span class="text-xs text-neutral-500 font-base uppercase tracking-wider">
        {{ language ?? 'code' }}
      </span>
      <button
        @click="copy"
        class="text-xs text-neutral-500 hover:text-primary-lightgreen transition-colors flex items-center gap-1 cursor-pointer"
        :title="copied ? 'Copied!' : 'Copy code'"
      >
        <!-- Copy icon -->
        <svg
          v-if="!copied"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-3.5 h-3.5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
          />
        </svg>
        <!-- Check icon -->
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-3.5 h-3.5 text-primary-lightgreen"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
        <span>{{ copied ? 'Copied!' : 'Copy' }}</span>
      </button>
    </div>

    <!-- Code block -->
    <pre
      class="bg-[#0d0d0f] border border-t-0 border-neutral-gray rounded-b-md overflow-x-auto p-4 m-0"
    ><code class="text-sm text-neutral-200 font-base leading-relaxed whitespace-pre">{{ code }}</code></pre>
  </div>
</template>
