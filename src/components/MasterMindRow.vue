<script setup lang="ts">
defineProps<{
  data: string[]
}>()
</script>

<template>
  <table>
    <tbody>
      <tr>
        <td :colspan="data.length">Secret mastermind pins:</td>
      </tr>
      <tr>
        <td v-for="pin in data" :style="{ color: pin }">
          {{ pin }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped></style>
