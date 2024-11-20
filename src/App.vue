<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'

import PinRow from './components/PinRow.vue'
import PickColor from './components/PickColor.vue'
import MasterMindRow from './components/MasterMindRow.vue'
import { generateSecretPins } from './utils/generateSecretPins'

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

const secretPins = ref<string[]>([])

onMounted(() => {
  secretPins.value = generateSecretPins()
})
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
p {
  padding: 10px;
  color: white;
}
</style>
