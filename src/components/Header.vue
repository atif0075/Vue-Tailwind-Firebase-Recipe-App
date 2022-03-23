<template>
  <nav class="nav w-full flex flex-wrap items-center justify-between px-4">
    <div class="flex items-center mr-6 py-3">
      <span class="font-black tracking-wider text-dark text-2xl">
        <router-link class="flex" to="/">
          <img class="w-8" src="../assets/food.svg" alt="vrecipe" />
          <span class="px-2 block">Vrecipe</span>
        </router-link>
      </span>
    </div>

    <input class="menu-btn hidden" type="checkbox" id="menu-btn" />
    <label
      class="menu-icon block cursor-pointer lg:hidden px-2 py-4 relative select-none"
      for="menu-btn"
    >
      <span
        id="bar"
        class="navicon bg-primary flex items-center relative"
      ></span>
    </label>

    <ul
      class="menu border-b lg:border-none text-dark flex justify-end items-center list-reset m-0 w-full lg:w-auto absolute z-50 left-0 lg:static top-14"
    >
      <li class="border-t lg:border-none">
        <button class="px-2 border-2 border-blue-600">
          <router-link to="/addrecipe">
            <span class="text-2xl"> + </span>
          </router-link>
        </button>
      </li>
      <li class="border-t lg:border-none cursor-pointer">
        <router-link
          @click="hide"
          to="/"
          class="block lg:inline-block px-4 py-3 no-underline text-grey-primaryest hover:text-grey-primaryer"
          >Home</router-link
        >
      </li>
      <li class="border-t lg:border-none cursor-pointer">
        <router-link
          @click="hide"
          to="/global"
          class="block md:inline-block px-4 py-3 no-underline text-grey-primaryest hover:text-grey-primaryer"
          >Global Chefs</router-link
        >
      </li>
      <li class="border-t lg:border-none cursor-pointer">
        <router-link
          @click="hide"
          to="/profile"
          class="block md:inline-block px-4 py-3 no-underline text-grey-primaryest hover:text-grey-primaryer"
          >Profile</router-link
        >
      </li>

      <li class="border-t lg:border-none cursor-pointer">
        <router-link
          @click="hide"
          to="/signin"
          class="block md:inline-block px-4 py-3 no-underline text-grey-primaryest hover:text-grey-primaryer"
          >Sign in</router-link
        >
      </li>
      <li class="border-t lg:border-none cursor-pointer">
        <button
          @click="handleClick"
          class="inline-block p-2 text-white bg-secondary border border-secondary rounded-full hover:bg-transparent hover:text-secondary active:text-secondary-secondary"
        >
          <abbr title="Signout">
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              /></svg
          ></abbr>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import { ref } from "vue";
import { useRouter } from "vue-router";
let store = useStore();
let router = useRouter();
let error = ref(null);

let handleClick = () => {
  try {
    setTimeout(() => {
      router.push("/signin");
      store.dispatch("signOut");
    }, 700);
    hide();
  } catch (err: any) {
    error.value = err;
  }
};

function hide() {
  let element: HTMLElement = document.getElementById("bar") as HTMLElement;
  element.click();
}
</script>
<style>
@media (max-width: 1024px) {
  .navicon {
    width: 1.125em;
    height: 0.125em;
  }

  .navicon::before,
  .navicon::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease-out;
    content: "";
    background: #3d4852;
  }

  .navicon::before {
    top: 5px;
  }

  .navicon::after {
    top: -5px;
  }

  .menu-btn:not(:checked) ~ .menu {
    display: none;
  }

  .menu-btn:checked ~ .menu {
    display: block;
  }

  .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .menu-btn:checked ~ .menu-icon .navicon::before {
    transform: rotate(-45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon::after {
    transform: rotate(45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon::before,
  .menu-btn:checked ~ .menu-icon .navicon::after {
    top: 0;
  }
}
</style>
