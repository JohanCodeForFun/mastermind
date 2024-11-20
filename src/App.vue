<script setup lang="ts">
import { reactive } from 'vue'

import TheCounter from './components/TheCounter.vue'
import PinRow from './components/PinRow.vue'

const pinRow = reactive([
  ['true', 'false', 'false', 'false'],
  ['false', 'false', 'false', 'false'],
  ['false', 'false', 'false', 'false'],
  ['false', 'false', 'false', 'false'],
  ['false', 'false', 'false', 'false'],
])
</script>

<template>
  <main>
    <PinRow :row="pinRow" />
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
