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
}
