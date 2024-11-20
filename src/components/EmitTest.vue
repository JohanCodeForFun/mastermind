<script setup lang="ts">
import { defineEmits } from 'vue'

// Definierar emit-funktionen
const emit = defineEmits(['customEvent'])

// Funktion som emitterar en händelse
const triggerEvent = () => {
  emit('customEvent', 'Hello from child!')
}
</script>

<template>
  <div>
    <button @click="triggerEvent">Emit Event</button>
  </div>
</template>
