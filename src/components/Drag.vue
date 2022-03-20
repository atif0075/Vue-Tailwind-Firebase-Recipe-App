<template>
  <div
    id="zone"
    @dragenter.prevent="toggle_active()"
    @dragleave.prevent="toggle_active()"
    @dragover.prevent
    @drop.prevent="drop"
    :class="{ 'bg-green-100 border-green-300 dark:bg-green-700': dragActive }"
    class="flex items-center justify-center w-full px-12 py-8 border-4 border-gray-300 border-dashed rounded dark:border-2"
  >
    <div
      class="flex flex-col items-center justify-center gap-2 text-gray-500 dark:text-gray-100"
    >
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          :class="{ 'animate-bounce': droppedFile === null }"
          class="w-20 h-20"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
      </span>
      <p class="text-base md:text-xl font-semibold">Drag a file here</p>
      <p class="text-xs md:text-sm font-semibold dark:text-gray-400">
        Or if you prefer
      </p>
      <!-- File input -->
      <label
        for="file"
        class="p-2 text-xs md:text-sm font-semibold leading-tight text-gray-600 bg-purple-100 border rounded cursor-pointer dark:bg-purple-600 dark:border-none hover:bg-purple-200 dark:hover:bg-purple-700 hover:shadow-sm"
      >
        <span class="text-purple-500 dark:text-gray-100"
          >Select a file from your device</span
        >
        <input
          type="file"
          @change="selectedFile"
          name="file"
          id="file"
          max="1"
          accept="image/*"
          class="hidden"
        />
      </label>
      <!-- Dropped file info -->
      <div
        v-if="droppedFile !== null"
        class="flex flex-wrap items-center justify-center gap-2 text-base font-semibold text-gray-600 dark:text-gray-100"
      >
        <span class="text-xs md:text-sm">File: {{ droppedFile.name }}</span>
        <button
          @click="clearDropped()"
          class="inline-flex items-center justify-center"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>
  <section
    v-if="store.state.error == true"
    class="flex justify-center items-center py-4"
  >
    <div
      class="flex items-center gap-4 p-4 w-96 text-white bg-gray-900 rounded"
      role="alert"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5 text-red"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
        />
      </svg>
      <strong class="text-sm font-normal">
        This File Type is not Allowed
      </strong>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import useDropZone from "../TS/dropZone";
import { useStore } from "vuex";
const store = useStore();
const {
  dragActive,
  droppedFile,
  toggle_active,
  drop,
  clearDropped,
  selectedFile,
} = useDropZone();
</script>
