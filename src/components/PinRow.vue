<script setup lang="ts">
defineProps<{
  row: string[][]
}>()
</script>

<template>
  <table>
    <tbody>
      <tr v-for="(subArray, rowIndex) in row" :key="rowIndex">
        <td v-for="(pin, colIndex) in subArray">{{ pin }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
span {
  padding: 0.5rem 0.3rem;
  border: 1px solid red;
}
</style>
