<script setup lang="ts">
defineProps<{
  data: string[]
}>()
</script>

<template>
  <table>
    <tbody>
      <tr>
        <td :colspan="data.length + 2">Secret mastermind pins:</td>
      </tr>
      <tr>
        <td class="score-pin"></td>
        <td v-for="pin in data" :style="{ backgroundColor: pin }">
          {{ pin !== '' ? '•' : '' }}
        </td>
        <td class="score-pin"></td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

td {
  width: 40px;
  height: 40px;
  text-align: center;
  vertical-align: middle;
  border: 1px solid #ccc;
  background-color: sienna;
  cursor: pointer;
  color: #fff;
  padding: 0.5rem;
}

.score-pin {
  width: 20px;
  height: 40px;
  background-color: #eee;
}
</style>
