import { defineStore } from 'pinia'
import { routerPush } from '@/utils/common'
import { computed, ref } from 'vue'
import { isTokenExpired } from '@/utils/token'

export const useUserStore = defineStore(
  'user',
  () => {
    const accessToken = ref<string | null>(null)

    const loginFlag = computed<boolean>(() => {
      return !isTokenExpired(accessToken.value)
    })

    function saveAccessToken(token: string): void {
      accessToken.value = token
    }

    async function logout(): Promise<void> {
      accessToken.value = null
      await routerPush('/')
    }

    async function getUserInfo(): Promise<void> {
      // TODO: get user info
      // 1. 본인 박스 정보
    }

    return { accessToken, loginFlag, saveAccessToken, logout }
  },
  { persist: true }
)
