<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'

import PinRow from './components/PinRow.vue'
import PickColor from './components/PickColor.vue'
import MasterMindRow from './components/MasterMindRow.vue'
import { generateSecretPins } from './utils/generateSecretPins'
import EmitTest from './components/EmitTest.vue'

const pinRow = reactive([
  ['empty', 'empty', 'empty', 'empty'],
  ['empty', 'empty', 'empty', 'empty'],
  ['empty', 'empty', 'empty', 'empty'],
  ['empty', 'empty', 'empty', 'empty'],
  ['empty', 'empty', 'empty', 'empty'],
])

let currentColor = ref<string>('blue')

const customEvent = (emit: string) => {
  console.log('emit:', emit)
}

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
    <EmitTest @custom-Event="customEvent" />
    <div class="color-picker">
      <p :style="{ color: currentColor }">Current color: {{ currentColor }}</p>
      <PickColor :currentColor="currentColor" @updateColor="updateColor" />
    </div>
    <div class="game-board">
      <PinRow :row="pinRow" @update-row="updateRow" />
      <MasterMindRow :data="secretPins" />
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.color-picker {
  margin-bottom: 20px;
}

.game-board {
  display: flex;
  flex-direction: column;
  align-items: center;
}

p {
  padding: 10px;
  color: white; /* Adjust text color for better readability */
}
</style>
