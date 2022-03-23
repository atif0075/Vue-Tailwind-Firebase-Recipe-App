<template>
  <section
    class="min-h-screen text-white py-6 flex flex-col justify-center sm:py-10"
  >
    <div class="relative mt-2 py-3 sm:w-[36rem] sm:max-w-xl sm:mx-auto">
      <div class="relative mt-2 px-4 py-10 sm:rounded-3xl sm:p-20">
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
              <div class="relative mt-2">
                <input
                  autocomplete="off"
                  id="name"
                  name="name"
                  type="text"
                  class="peer placeholder-transparent bg-transparent text-white h-10 w-full border-b-2 border-gray-300 outline-none"
                  placeholder="Name"
                />
                <label for="name" class="label">Name</label>
              </div>
              <div class="relative mt-2">
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
              <div class="relative mt-2">
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
              <main>
                <main class="flex flex-col">
                  <div>
                    <input
                      class="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-secondary checked:border-secondary focus:outline-none transition duration-200 mr-2 cursor-pointer"
                      type="radio"
                      name="ask"
                      value="cheff"
                      id="cheff"
                    />
                    <label
                      class="text-xl font-semibold px-2 cursor-pointer"
                      for="cheff"
                      >Cheff</label
                    >
                  </div>
                  <div>
                    <input
                      class="appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-secondary checked:border-secondary focus:outline-none transition duration-200 mr-2 cursor-pointer"
                      type="radio"
                      checked
                      value="reader"
                      name="ask"
                      id="reader"
                    />
                    <label
                      class="text-xl font-semibold px-2 cursor-pointer"
                      for="reader"
                      >Reader</label
                    >
                  </div>
                </main>
              </main>
              <div class="flex justify-center items-center">
                <button
                  class="bg-secondary text-primary px-7 mt-5 py-2 border font-semibold"
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
<style>
.tabAnim {
  z-index: -9;
}

#option0:checked ~ div {
  --tw-translate-x: 0%;
}

#option1:checked ~ div {
  --tw-translate-x: 100%;
}

#option2:checked ~ div {
  --tw-translate-x: 200%;
}

#option3:checked ~ div {
  --tw-translate-x: 300%;
}

#option4:checked ~ div {
  --tw-translate-x: 400%;
}
</style>
