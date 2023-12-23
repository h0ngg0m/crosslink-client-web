export interface Drawer {
  title: string
  icon?: string
  link: string
}

export interface JWTToken {
  accessToken: string | null
  refreshToken: string | null
}

export interface Meta {
  code: number
  message: string
}

export interface CommonResponse<T> {
  meta: Meta
  data: T | null
}

export interface PageParams {
  page: number
  size: number
  // sortBy: string[]
  // sortDesc: boolean[]
}

export interface PageResponse<T> {
  total: number
  page: number
  size: number
  items: T[]
}
