<!-- component -->
<template>
  <section class="flex flex-col sm:flex-row p-3 justify-between items-center">
    <main class="py-5 w-full md:w-2/4 px-2 md:px-12">
      <Drag />
    </main>
    <main class="py-5 flex flex-col w-full md:w-2/4 px-2 md:px-12">
      <div>
        <label class="block text-xs font-medium text-gray-50" for="email">
          Title
        </label>
        <input
          class="w-full p-3 outline-none text-gray-800 mt-1 text-sm border-2 border-gray-200 rounded"
          id="email"
          type="email"
          placeholder="Title of your recipe"
        />
      </div>
      <div class="mt-2">
        <label class="block text-xs font-medium text-gray-50" for="email">
          Description
        </label>
        <textarea
          placeholder="Description of your recipe"
          class="w-full p-3 mt-1 outline-none text-sm border-2 h-44 text-gray-800 border-gray-200 rounded"
        ></textarea>
      </div>
    </main>
  </section>
  <section class="py-12 px-3 md:px-12">
    <main class="bg-slate-50 text-black">
      <QuillEditor
        style="height: 456px"
        :toolbar="toolbarOptions"
        id="editor"
        theme="snow"
      />
    </main>
    <button
      class="bg-yellow px-6 py-2 border mt-5 text-dark font-semibold"
      @click="getHTML"
    >
      Add Recipe
    </button>
  </section>

  <section>
    <p><span v-html="rawHtml"></span></p>
  </section>
</template>
<script lang="ts" setup>
import { QuillEditor, Quill } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { ref } from "vue";
import Drag from "../components/Drag.vue";

var toolbarOptions = [
  ["bold", "italic", "underline"],
  ["blockquote"],
  [{ header: 1 }, { header: 2 }],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ color: [] }, { background: [] }],
  [{ align: [] }],
  ["link", "image", "video"],
  ["clean"],
];
let rawHtml = ref(null);
let getHTML = () => {
  let quill = new Quill("#editor").root.innerHTML;
  rawHtml.value = quill;
};
</script>
