import axios from 'axios'
import { routerPush } from '@/utils/common'

export function removeTokens(): void {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}

export function getAccessToken(): string | null {
  return localStorage.getItem('accessToken')
}

export function getRefreshToken(): string | null {
  return localStorage.getItem('refreshToken')
}

export function isTokenExpired(token: string | null): boolean {
  if (!token) {
    return true
  }
  try {
    const decodedPayload = JSON.parse(atob(token.split('.')[1]))
    const currentTime = Math.floor(Date.now() / 1000)
    return decodedPayload.exp <= currentTime
  } catch (e) {
    console.error('Error checking token expiration', e)
    return true
  }
}

export async function refreshTokens(): Promise<void> {
  const refreshToken = getRefreshToken()

  if (!refreshToken || isTokenExpired(refreshToken)) {
    await routerPush('/login')
  }

  const response = await axios.post(`${import.meta.env.VITE_API_URL}refresh`, {
    refreshToken: refreshToken
  })

  saveTokens(response.data.data)
}

export async function logout(): void {
  removeTokens()
  await routerPush('/login')
}
