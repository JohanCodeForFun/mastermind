<script setup lang="ts">
defineProps<{
  row: string[][]
}>()

const emit = defineEmits(['updateRow'])

const setContent = (rowIndex: number, colIndex: number) => {
  emit('updateRow', { rowIndex, colIndex })
}
</script>

<template>
  <table>
    <tbody>
      <tr v-for="(subArray, rowIndex) in row" :key="rowIndex">
        <td class="score-pin"></td>
        <td
          v-for="(pin, colIndex) in subArray"
          @click="setContent(rowIndex, colIndex)"
          :style="{ backgroundColor: pin }"
        >
          <span>{{ pin !== '' ? '•' : '' }}</span>
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
  font-size: 24px;
  padding: 0;
}

.score-pin {
  width: 20px;
  height: 40px;
  background-color: #eee;
}
</style>
