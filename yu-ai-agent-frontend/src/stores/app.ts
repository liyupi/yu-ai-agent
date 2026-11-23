import { defineStore } from 'pinia'
import type { UserPreferences } from '@/types'

export const useAppStore = defineStore('app', () => {
  // 状态
  const loading = ref(false)
  const userPreferences = ref<UserPreferences>({
    theme: 'auto',
    language: 'zh-CN',
    fontSize: 'medium'
  })

  // 响应式计算
  const isDark = useDark({
    selector: 'html',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: 'light'
  })

  // Actions
  const setLoading = (isLoading: boolean) => {
    loading.value = isLoading
  }

  const updatePreferences = (preferences: Partial<UserPreferences>) => {
    userPreferences.value = { ...userPreferences.value, ...preferences }
    // 保存到 localStorage
    localStorage.setItem('user-preferences', JSON.stringify(userPreferences.value))
  }

  const loadPreferences = () => {
    try {
      const saved = localStorage.getItem('user-preferences')
      if (saved) {
        const parsed = JSON.parse(saved)
        userPreferences.value = { ...userPreferences.value, ...parsed }
      }
    } catch (error) {
      console.warn('Failed to load user preferences:', error)
    }
  }

  const toggleTheme = () => {
    const currentTheme = userPreferences.value.theme
    let newTheme: UserPreferences['theme']
    
    if (currentTheme === 'light') {
      newTheme = 'dark'
    } else if (currentTheme === 'dark') {
      newTheme = 'auto'
    } else {
      newTheme = 'light'
    }
    
    updatePreferences({ theme: newTheme })
    
    if (newTheme === 'auto') {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    } else {
      isDark.value = newTheme === 'dark'
    }
  }

  return {
    // State
    loading,
    userPreferences,
    isDark,
    
    // Actions
    setLoading,
    updatePreferences,
    loadPreferences,
    toggleTheme
  }
})