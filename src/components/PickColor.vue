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
  <button value="red" @click="updateColor">red</button>
  <button value="green" @click="updateColor">green</button>
  <button value="blue" @click="updateColor">blue</button>
</template>

<style scoped></style>
