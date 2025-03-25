import { defineStore } from 'pinia'

export const useThemeStoreStore = defineStore('ThemeStore', () => {
  const theme = ref('dark')
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }
  return { theme, toggleTheme }
})
