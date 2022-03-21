<template>
  <section
    class="flex flex-col w-full sm:flex-row p-3 justify-between items-center"
  >
    <main class="py-5 w-full md:w-2/4 px-2 md:px-12">
      <Drag />
    </main>
    <main class="py-5 flex flex-col w-full md:w-2/4 px-2 md:px-8">
      <div>
        <label class="block text-xs font-medium text-gray-50"> Title </label>
        <input
          maxlength="17"
          v-model="title"
          class="w-full p-3 outline-none text-dark mt-1 text-sm border-2 border-gray-200 rounded"
          type="text"
          placeholder="Title of your recipe (max 17 characters)"
        />
      </div>
      <div class="mt-2">
        <label class="block text-xs font-medium text-gray-50">
          Description
        </label>
        <textarea
          v-model="description"
          maxlength="115"
          placeholder="Description of your recipe (max 115 characters)"
          class="w-full p-3 mt-1 outline-none text-sm border-2 h-44 text-dark border-gray-200 rounded"
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
      class="bg-secondary px-6 py-2 border mt-5 text-primary border-dark font-semibold"
      @click="addData"
    >
      Add Recipe
    </button>
  </section>
</template>
<script lang="ts" setup>
import { QuillEditor, Quill } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { collection, doc, setDoc } from "firebase/firestore";
import { ref } from "vue";
import Drag from "../components/Drag.vue";
import { db } from "../firebase/config";

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
  return (rawHtml.value = quill);
};
let title = ref();
let description = ref();

let addData = async () => {
  let slug = title.value;
  let data = getHTML();
  let slugs = slug.toString().replace(/\s+/g, "-").toLowerCase();
  const Data = collection(db, "Recipe");
  try {
    await setDoc(doc(Data), {
      title: title.value,
      description: description.value,
      slug: slugs,
      method: data,
    });
  } catch (error) {
    console.log(error);
  }
};
</script>
