<script setup lang="ts">
import { ref } from 'vue'
defineProps(['title'])

const count = ref(0)

// const incrementCount = () => {
//   count.value = count.value++
// }
</script>

<template>
  <h2>{{ title }}</h2>
  <button @click="count++">You clicked me {{ count }} times</button>
</template>
