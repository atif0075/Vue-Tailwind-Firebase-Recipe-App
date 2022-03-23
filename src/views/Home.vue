<template>
  <section>
    <section class="text-secondary">
      <div
        class="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex"
      >
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-3xl capitalize font-extrabold sm:text-5xl text-secondary">
            Browse our themed recipes 

            <span class="sm:block capitalize"> for inspiration </span>
          </h1>

          <p class="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
            Find and share everyday cooking inspiration on Allrecipes. Discover
            recipes, cooks, videos, and how-tos based on the food you love and
            the friends you follow.
          </p>

          <div class="flex flex-wrap justify-center gap-4 mt-8">
            <a class="btn" href="/get-started"> Get Started </a>

            <a class="btn-outline" href="/about"> Learn More </a>
          </div>
        </div>
      </div>
    </section>
  </section>
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
            class="bg-primary bg-opacity-20 min-h-96 px-10 flex flex-wrap flex-col pt-32 hover:bg-opacity-75 transform duration-300"
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
              class="opacity-0 mb-5 text-white text-xl group-hover:opacity-80 transform duration-500"
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
