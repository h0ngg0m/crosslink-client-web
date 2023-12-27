import router from '@/router'
import { stringify } from 'qs'
import dayjs from 'dayjs'
import { DATETIME_FORMAT_STRING } from '@/definitions/constant'
import { v4 as uuidv4 } from 'uuid'

export async function routerPush(path: string): Promise<void> {
  if (router.currentRoute.fullPath !== path) {
    await router.push(path)
  }
}
export async function routerReplace(path: string): Promise<void> {
  if (router.currentRoute.fullPath !== path) {
    await router.replace(path)
  }
}

export function stringifyParams(value: any): string {
  return stringify(value, { arrayFormat: 'comma', skipNulls: true })
}

export function toDatetimeFormat(value: string): string {
  return dayjs(value).isValid() ? dayjs(value).format(DATETIME_FORMAT_STRING) : '-'
}

export function generateUUID(): string {
  return uuidv4()
}
