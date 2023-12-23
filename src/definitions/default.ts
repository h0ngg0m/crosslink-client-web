import type { User } from '@/definitions/model'

export function defaultUser(): User {
  return {
    name: '',
    loginId: ''
  }
}
