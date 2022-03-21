<template>
  <h1 class="text-3xl px-3 md:px-0 font-extrabold text-secondary">
    All recipes
  </h1>
  <section
    class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-3 sm:px-0 py-10 gap-4"
  >
    <main v-for="items in store.state.recipes" :key="items">
      <router-link :to="`/recipe/${items.slug}`">
        <article
          class="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-96 transform duration-500 hover:-translate-y-2 cursor-pointer group"
          :style="{ backgroundImage: `url(${items.bg})` }"
        >
          <div
            class="bg-dark bg-opacity-20 min-h-96 px-10 flex flex-wrap flex-col pt-32 hover:bg-opacity-75 transform duration-300"
          >
            <h1
              class="text-white text-3xl mb-5 transform translate-y-32 group-hover:translate-y-0 duration-500"
            >
              {{ items.title }}
            </h1>
            <div
              class="w-16 h-2 bg-secondary rounded-full mb-5 transform translate-y-32 group-hover:translate-y-0 duration-500"
            ></div>
            <p
              class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500"
            >
              {{ items.description }}
            </p>
          </div>
        </article>
      </router-link>
    </main>
  </section>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
const store = useStore();
</script>
