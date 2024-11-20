<script setup lang="ts">
import { defineEmits } from 'vue'

defineProps<{
  currentColor: string
}>()

const emit = defineEmits(['updateColor'])

const updateColor = (event: MouseEvent) => {
  const buttonValue = (event.target as HTMLButtonElement).value
  emit('updateColor', buttonValue)
}
</script>

<template>
  <div class="color-picker-grid rounded">
    <button value="red" @click="updateColor" class="rounded" style="background-color: red"></button>
    <button
      value="green"
      @click="updateColor"
      class="rounded"
      style="background-color: green"
    ></button>
    <button
      value="blue"
      @click="updateColor"
      class="rounded"
      style="background-color: blue"
    ></button>
    <button
      value="yellow"
      @click="updateColor"
      class="rounded"
      style="background-color: yellow"
    ></button>
    <button
      value="orange"
      @click="updateColor"
      class="rounded"
      style="background-color: orange"
    ></button>
    <button
      value="purple"
      @click="updateColor"
      class="rounded"
      style="background-color: purple"
    ></button>
  </div>
</template>

<style scoped>
.color-picker-grid {
  min-width: 180px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.3rem;
  border: 1px solid #333;
  background-color: sienna;
}

.rounded {
  border-radius: 0.5rem;
}

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
