<template>
  <h1 class="text-3xl px-3 md:px-0 font-extrabold text-yellow">All recipes</h1>
  <section
    class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-3 sm:px-0 py-10 gap-4"
  >
    <main v-for="items in store.state.recipes" :key="items">
      <a
        :style="{ background: `linear-gradient(to top, #00000073, #000000cc),url(${items.bg})` }"
        class="relative block group h-72 text-white"
      >
        <span
          class="absolute inset-0 border-2 border-yellow border-dashed"
        ></span>

        <div></div>
        <div
          id="sec"
          class="relative flex items-end h-full transition-transform transform border-2 border-[#adadad] group-hover:-translate-x-2 group-hover:-translate-y-2"
        >
          <div
            class="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute"
          >
            <h2 class="mt-4 text-2xl font-medium bg-yellow text-dark p-2">
              {{ items.title }}
            </h2>
          </div>
          <div
            class="absolute p-8 transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative"
          >
            <h2 class="mt-4 text-2xl font-medium">{{ items.title }}</h2>
            <p class="mt-4">{{ items.description }}</p>

            <button
              class="border-2 bg-yellow text-dark font-semibold px-5 py-2 mt-2 border-black"
            >
              <router-link :to="`/recipe/${items.slug}`"
                >View recipe</router-link
              >
            </button>
          </div>
        </div>
      </a>
    </main>
  </section>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
const store = useStore();
</script>

<style scoped>
#sec {
  /* background: linear-gradient(to top, #00000073, #000000cc), no-repeat; */
  background-size: cover;
  background-position: center;
}
</style>
// random image through unsplash // https://source.unsplash.com/random/400x400
