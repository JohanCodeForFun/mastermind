<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  rows: Number,
  buttonColors: Array,
  changeRowColor: Function
})

</script>

<template>
  <div class="card" v-for="n in rows" :key="rowIndex">
    <button v-for="n in 4" :key="n" @click="changeRowColor(rowIndex, buttonIndex, color)" :style="{ backgroundColor: color }">
      {{ color }} o
    </button>
  </div>
</template>