<script setup lang="ts">
defineProps(['row'])
</script>

<template>
  <div>
    <div v-for="(pin, index) in row" :key="index">
      <span v-for="pinn in pin">--{{ pinn ? 'true' : 'false' }}--</span>
    </div>
  </div>
</template>
