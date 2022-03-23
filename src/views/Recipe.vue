<template>
  <main class="text-dark">
    <main class="relative h-14">
      <button class="fixed z-50 border-2 bg-primary p-1 my-2 border-secondary">
        <router-link to="/"
          ><svg
            class="w-6 h-6 text-secondary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </router-link>
      </button>
    </main>
    <section>
      <main class="relative container mx-auto px-4">
        <div class="relative -mx-4 top-0 pt-[17%] overflow-hidden">
          <img
            class="absolute inset-0 object-cover object-top w-full h-full filter blur"
            :src="recipe.bg"
            :alt="recipe.title"
          />
        </div>
        <div class="mt-[-10%] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto">
          <div class="relative pt-[56.25%] overflow-hidden rounded-2xl">
            <img
              class="w-full h-full absolute inset-0 object-cover"
              :src="recipe.bg"
              :alt="recipe.title"
            />
          </div>
        </div>
        <article
          class="sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] text-justify mx-auto py-8"
        >
          <h1 class="text-2xl font-bold">
            {{ recipe.title }}
          </h1>
          <h2 class="mt-2 text-sm text-gray-500">
            Posted by {{ recipe.by }} on {{ recipe.date }}
          </h2>
          <div v-html="recipe.method" class="mt-6"></div>
          <div>
            <button
              class="text-white px-4 w-auto h-10 border border-secondary rounded-full hover:bg-secondary hover:text-primary active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
            >
              <span>Add to favorites </span>
            </button>
          </div>
        </article>
      </main>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

const route = useRoute();
const store = useStore();

let recipe = computed(() => {
  return store.state.recipes.find(
    (recipe: any) => recipe.slug === route.params.slug
  );
});
</script>
<style scoped lang="postcss">
p {
  @apply text-base mt-4;
}
h1 {
  @apply text-3xl font-bold;
}
strong {
  @apply font-bold;
}
</style>
