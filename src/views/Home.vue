<template>
  <section class="text-secondary">
    <div
      class="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex"
    >
      <div class="max-w-3xl mx-auto text-center">
        <XyzTransitionGroup xyz="fade up">
          <h1
            v-if="show"
            class="text-3xl capitalize font-extrabold sm:text-5xl text-secondary"
          >
            Browse our themed recipes
            <span class="sm:block capitalize"> for inspiration </span>
          </h1>
          <p class="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
            Find and share everyday cooking inspiration on Allrecipes. Discover
            recipes, cooks, videos, and how-tos based on the food you love and
            the friends you follow.
          </p>
        </XyzTransitionGroup>
        <div class="flex flex-wrap justify-center gap-4 mt-8">
          <router-link class="btn" to="/all-recipe"> Get Started </router-link>
          <a class="btn-outline" @click="show = !show"> Learn More </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
let show = ref(false);
onMounted(() => {
  show.value = true;
});
</script>
