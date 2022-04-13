<template>
  <div class="example-wrap flex-col">
    <XyzTransition appear xyz="fade rotate-right ease-out-back">
      <div class="square" v-if="buttonToggled"></div>
    </XyzTransition>
    <button class="example-button" @click="buttonToggled = !buttonToggled">
      Click to toggle
    </button>
  </div>

  <div class="example-wrap flex-col">
    <XyzTransitionGroup
      appear
      class="example-grid"
      xyz="fade small out-down out-rotate-right appear-stagger"
    >
      <div class="square" v-for="index in numElements" :key="index"></div>
    </XyzTransitionGroup>
    <div class="flex-row">
      <button class="example-button" @click="addElement">Add Element</button>
      <button class="example-button" @click="removeElement">
        Remove Element
      </button>
    </div>
  </div>
  <main>
   
      <div class="square" v-for="index in numCats" :key="index">
        <img
          class="item-image"
          :src="`https://cataas.com/cat?type=sm?id=${index}`"
          alt="Picture of a cat"
        />
      </div>
    </XyzTransitionGroup>
  </main>
</template>

<script lang="ts" setup>
import { ref } from "vue";

let buttonToggled = ref(true);
let numElements = ref(3);
let numCats = ref(8);
const addElement = () => {
  numElements.value += 1;
};
const removeElement = () => {
  if (numElements.value > 0) {
    numElements.value -= 1;
  }
};
</script>

<style>
body {
  background-color: black;
}

.flex-col {
  display: flex;
  flex-direction: column;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.example-wrap {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.example-grid {
  display: grid;
  grid-template-columns: repeat(4, 5rem);
  justify-content: center;
  margin: 0 auto;
  width: 100%;
}

.example-button {
  margin: 1rem;
}

.square {
  width: 5rem;
  height: 5rem;
  background-color: #56ccf2;
}
</style>
