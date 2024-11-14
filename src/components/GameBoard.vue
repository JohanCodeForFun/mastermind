<script setup>
import { ref } from 'vue'
import GameRow from './GameRow.vue';

defineProps({
  rows: Number,
})

const count = ref(0)
</script>

<template>
  <GameRow :rows=12 />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
