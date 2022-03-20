<template>
  <main class="h-screen w-full flex flex-col justify-center items-center">
    <h1 class="text-9xl font-extrabold tracking-widest">404</h1>
    <div class="bg-red px-2 text-sm rounded rotate-12 absolute">
      Page Not Found
    </div>
    <router-link to="/">
      <button class="mt-5">
        <a
          class="relative inline-block text-sm font-medium text-red group active:text-dark-red focus:outline-none focus:ring"
        >
          <span
            class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-red group-hover:translate-y-0 group-hover:translate-x-0"
          ></span>

          <span class="relative block px-8 py-3 bg-dark border border-current">
            Go Home
          </span>
        </a>
      </button>
    </router-link>
  </main>
</template>
