<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'

import PinRow from './components/PinRow.vue'
import PickColor from './components/PickColor.vue'
import MasterMindRow from './components/MasterMindRow.vue'

const pinRow = reactive([
  ['empty', 'empty', 'empty', 'empty'],
  ['empty', 'empty', 'empty', 'empty'],
  ['empty', 'empty', 'empty', 'empty'],
  ['empty', 'empty', 'empty', 'empty'],
  ['empty', 'empty', 'empty', 'empty'],
])

let currentColor = ref<string>('blue')

const updateColor = (color: string) => {
  currentColor.value = color
}

const updateRow = ({ rowIndex, colIndex }: { rowIndex: number; colIndex: number }) => {
  pinRow[rowIndex][colIndex] = currentColor.value
}

const knownColors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple']
const secretPins = ref<string[]>([])

const generateSecretPins = () => {
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * knownColors.length)
    secretPins.value.push(knownColors[randomIndex])
  }
}

onMounted(() => generateSecretPins())
</script>

<template>
  <main>
    <p :style="{ color: currentColor }">Current color: {{ currentColor }}</p>
    <PickColor :currentColor="currentColor" @updateColor="updateColor" />
    <PinRow :row="pinRow" @update-row="updateRow" />
    <MasterMindRow :data="secretPins" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
