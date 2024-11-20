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
        <td
          v-for="(pin, colIndex) in subArray"
          @click="setContent(rowIndex, colIndex)"
          :style="{ color: pin }"
        >
          {{ pin }}
        </td>
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
