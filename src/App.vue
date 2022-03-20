<script setup lang="ts">
import Header from "./components/Header.vue";
import { useRouter, useRoute } from "vue-router";
let router = useRouter();
let route = useRoute();
</script>

<template>
  <main class="bg-dark min-h-screen">
    <div class="container">
      <header v-if="route.name != '404'" class="bg-mid-dark text-white">
        <Header />
      </header>
      <main class="text-white">
        <router-view />
      </main>
    </div>
    <footer v-if="route.name != '404'" class="bg-dark text-center lg:text-left">
      <div class="text-white text-center p-4">
        © 2021 Copyright:
        <a class="text-yellow" href="/">Tail recipe</a>
      </div>
    </footer>
  </main>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;400;500;600;700;800;900&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}
*::selection {
  color: #1d1d1d;
  background: #f4db7d;
}
*::-webkit-scrollbar {
  width: 0.5rem;
  background: #1d1d1d;
}
*::-webkit-scrollbar-thumb {
  border-radius: 50px;
  background: #f4db7d;
}
</style>
