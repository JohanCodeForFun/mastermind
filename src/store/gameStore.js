import { reactive } from 'vue'

export const useStore = () => {
  const state = reactive({
    currentColor: null
  })

  const setColor = ( color) => {
    state.currentColor = color
  }

  return {
    state,
    setColor
  }
}