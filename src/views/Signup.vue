<template>
  <section
    class="min-h-screen text-white py-6 flex flex-col justify-center sm:py-10"
  >
    <div class="relative py-3 sm:w-[36rem] sm:max-w-xl sm:mx-auto">
      <div class="relative px-4 py-10 sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
          <div>
            <h1 class="text-2xl text-center font-semibold">
              Signup to Continue
            </h1>
          </div>
          <div class="divide-y divide-gray-100">
            <div
              class="py-8 text-base leading-6 space-y-4 sm:text-lg sm:leading-7"
            >
              <div class="relative">
                <input
                  autocomplete="off"
                  id="name"
                  name="name"
                  type="text"
                  class="peer placeholder-transparent bg-transparent text-white h-10 w-full border-b-2 border-gray-300 outline-none"
                  placeholder="Name"
                />
                <label for="email" class="label">Name</label>
              </div>
              <div class="relative">
                <input
                  autocomplete="off"
                  id="email"
                  name="email"
                  type="text"
                  class="peer placeholder-transparent bg-transparent text-white h-10 w-full border-b-2 border-gray-300 outline-none"
                  placeholder="Email address"
                />
                <label for="email" class="label">Email Address</label>
              </div>
              <div class="relative">
                <input
                  autocomplete="off"
                  id="password"
                  name="password"
                  type="password"
                  class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 bg-transparent focus:outline-none focus:borer-rose-600"
                  placeholder="Password"
                />
                <label for="password" class="label">Password</label>
              </div>
              <div class="flex justify-center items-center">
                <button
                  class="bg-yellow text-dark px-7 mt-5 py-2 border font-semibold"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>
