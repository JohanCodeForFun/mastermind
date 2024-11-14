<script setup>
import { ref } from 'vue'
import { useStore } from '../store/gameStore';

defineProps({
  rows: Number,
})

const { state, setColor } = useStore();
const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'white', 'black'];

const count = ref(0)

const changeColor = (index) => {
  const currentColor = state.buttonColors[index];
  const nextColor = colors[(colors.indexOf(currentColor) + 1) % colors.length];
  setColor(index, nextColor)
}
</script>

<template>
  <div class="card" v-for="n in rows" :key="n">
    <button type="button" @click="changeColor(0)" :style="{ backgroundColor: state.buttonColors[0] }">{{ state.buttonColors[0] }}</button>
    <button type="button" @click="changeColor(1)" :style="{ backgroundColor: state.buttonColors[1] }">{{ state.buttonColors[1] }}</button>
    <button type="button" @click="changeColor(2)" :style="{ backgroundColor: state.buttonColors[2] }">{{ state.buttonColors[2] }}</button>
    <button type="button" @click="changeColor(3)" :style="{ backgroundColor: state.buttonColors[3] }">{{ state.buttonColors[3] }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
