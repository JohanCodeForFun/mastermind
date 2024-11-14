<script setup>
import { useStore } from '../store/gameStore'

const { state, setColor } = useStore()
const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'white', 'black']

const selectColor = (color) => {
  console.log("pow", color)
    setColor(color)
}
</script>

<template>
  <div>
    <h1>Select a color</h1>
    Selected:{{ state.currentColor }}<br>
    <button v-for="(color, index) in colors" :key="color" @click="selectColor(color)" :style="{ backgroundColor: color }">
      {{ color }}, {{ index }}
    </button>
  </div>
</template>