<script setup lang="ts">
import { defineEmits } from 'vue'

const props = defineProps<{
  currentColor: string
}>()

const emit = defineEmits(['updateColor'])

const updateColor = (event: MouseEvent) => {
  const buttonValue = (event.target as HTMLButtonElement).value
  emit('updateColor', buttonValue)
}
</script>

<template>
  <button value="red" @click="updateColor" style="background-color: red">red</button>
  <button value="green" @click="updateColor" style="background-color: green">green</button>
  <button value="blue" @click="updateColor" style="background-color: blue">blue</button>
  <button value="yellow" @click="updateColor" style="background-color: yellow">yellow</button>
  <button value="orange" @click="updateColor" style="background-color: orange">orange</button>
  <button value="purple" @click="updateColor" style="background-color: purple">purple</button>
</template>

<style scoped>
button {
  color: white;
  padding: 10px;
  margin: 5px;
  border: none;
  cursor: pointer;
}
button[value='yellow'],
button[value='orange'] {
  color: black; /* Better contrast for yellow and orange buttons */
}
</style>
