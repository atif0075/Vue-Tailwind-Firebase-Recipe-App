<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import Header from "./components/Header.vue";

let router = useRouter();
let route = useRoute();
</script>

<template>
  <main class="bg-primary min-h-screen">
    <div class="container">
      <header v-if="route.name != '404'" class="bg-mid-primary text-white">
        <Header />
      </header>
      <main class="text-white">
        <router-view />
      </main>
    </div>
    <footer
      v-if="route.name != '404'"
      class="bg-primary text-center lg:text-left"
    >
      <div class="text-dark text-center p-4">
        © 2021 Copyright:
        <a class="text-secondary" href="/">Tail recipe</a>
      </div>
    </footer>
  </main>
</template>
<style lang="postcss">

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;

}
*::selection {
  @apply bg-secondary text-primary;
}
*::-webkit-scrollbar {
  @apply bg-dark w-[0.5rem];
}
*::-webkit-scrollbar-thumb {
  @apply bg-secondary rounded-[50px];
}
blockquote {
  @apply border-l-4 border-gray-400 pl-3;
}
</style>
