import { defineStore } from 'pinia'
import { routerPush } from '@/utils/common'
import { computed, ref } from 'vue'
import { isTokenExpired } from '@/utils/token'

export const useUserStore = defineStore('user', () => {
  const accessToken = ref<string | null>(null)

  const loginFlag = computed<boolean>(() => {
    return !isTokenExpired(accessToken.value)
  })

  function saveAccessToken(token: string): void {
    localStorage.setItem('accessToken', token)
    accessToken.value = token
  }

  async function logout(): Promise<void> {
    localStorage.removeItem('accessToken')
    accessToken.value = null
    await routerPush('/')
  }

  return { loginFlag, saveAccessToken, logout }
})
