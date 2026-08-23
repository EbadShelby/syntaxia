<script setup lang="ts"></script>

<template>
  <footer class="w-full border-t border-neutral-gray mt-8 py-8">
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
          href="https://github.com/EbadShelby/syntaxia/issues/new?title=[Snippet%20Request]%20"
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
          Request Snippet
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
  </footer>
</template>
