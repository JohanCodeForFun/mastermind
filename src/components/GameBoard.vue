<script setup>
import { ref } from 'vue'
import GameRow from './GameRow.vue'
import ColorPicker from './ColorPicker.vue'
import { useStore } from '../store/gameStore'

const { state, setColor } = useStore()

const rows = ref(12)
</script>

<template>
  color state:{{ state }}
  <ColorPicker />
  <GameRow :rows="rows" :buttonColors="state.buttonColors" :changeColor="setColor" />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>