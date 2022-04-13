<template>
  <nav class="nav w-full flex flex-wrap items-center justify-between px-4">
    <div class="flex items-center mr-6 py-3">
      <span class="tracking-wider text-secondary text-2xl">
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
        @click="bar = !bar"
        id="bar"
        class="navicon bg-primary flex items-center relative"
      ></span>
    </label>

    <XyzTransitionGroup
      xyz="fade left-100% duration-5"
      class="menu bg-primary lg:bg-transparent lg:border-none text-dark flex justify-end items-center list-reset m-0 w-full lg:w-auto absolute z-50 left-0 lg:static top-14"
    >
      <li v-if="bar" class="px-4">
        <router-link to="/addrecipe">
          <button
            type="button"
            class="btn flex justify-center items-center px-3 py-2"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </button>
        </router-link>
      </li>
      <li v-if="bar" class="cursor-pointer">
        <router-link
          @click="hide"
          to="/"
          class="block lg:inline-block px-4 py-3 no-underline text-grey-primaryest hover:text-grey-primaryer"
          >Home</router-link
        >
      </li>
      <li v-if="bar" class="cursor-pointer">
        <router-link
          @click="hide"
          to="/global"
          class="block md:inline-block px-4 py-3 no-underline text-grey-primaryest hover:text-grey-primaryer"
          >Global Chefs</router-link
        >
      </li>
      <li v-if="bar" class="cursor-pointer">
        <router-link
          @click="hide"
          to="/profile"
          class="block md:inline-block px-4 py-3 no-underline text-grey-primaryest hover:text-grey-primaryer"
          >Profile</router-link
        >
      </li>

      <li v-if="bar" class="cursor-pointer">
        <router-link
          @click="hide"
          to="/signin"
          class="block md:inline-block px-4 py-3 no-underline text-grey-primaryest hover:text-grey-primaryer"
          >Sign in</router-link
        >
      </li>
      <li v-if="bar" class="cursor-pointer">
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
    </XyzTransitionGroup>
  </nav>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
import { ref } from "vue";
import { useRouter } from "vue-router";
let store = useStore();
let router = useRouter();
let error = ref(null);
let show = ref(false);
let bar = ref(false);
if (window.innerWidth >= 1024) {
  bar.value = true;
}
window.onresize = () => {
  if (window.innerWidth >= 1024) {
    bar.value = true;
  }
};
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
li {
  list-style: none;
}
</style>
