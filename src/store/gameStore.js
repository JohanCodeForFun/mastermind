import { reactive } from 'vue'

export const useStore = () => {
  const state = reactive({
    buttonColors: Array(4).fill(null) // Assuming 4 buttons per row
  })

  const setColor = (index, color) => {
    state.buttonColors[index] = color
  }

  return {
    state,
    setColor
  }
}