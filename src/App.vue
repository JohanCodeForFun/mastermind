<script setup lang="ts">
import { ref } from 'vue'

import TheCounter from './components/TheCounter.vue'
import PinRow from './components/PinRow.vue'

const pinRow = ref([
  { id: 1, row: [true, false, false, false] },
  { id: 2, row: [false, false, false, false] },
  { id: 3, row: [false, false, false, false] },
  { id: 4, row: [false, false, false, false] },
  { id: 5, row: [false, false, false, false] },
])
</script>

<template>
  <main>
    <TheCounter title="Counter Component" />
    <PinRow v-for="row in pinRow" :key="row.id" :row="row" />
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
