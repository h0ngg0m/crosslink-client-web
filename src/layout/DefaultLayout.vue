<template>
  <v-layout>
    <v-app-bar flat color="primary">
      <template #prepend>
        <span class="ml-2 pointer text-h6" @click="routerPush('/')">🏋CrossLink</span>️
        <v-btn variant="text" class="ml-10" @click="resetTabAndPush('/boxes')"
          >전체 박스 목록</v-btn
        >
      </template>
      <template #append>
        <v-tooltip v-if="loginFlag" text="마이 페이지" location="bottom">
          <template #activator="{ props }">
            <v-btn v-bind="props" icon="mdi-account"></v-btn>
          </template>
        </v-tooltip>
        <v-btn v-if="loginFlag" @click="logout">로그아웃</v-btn>
        <v-btn v-else @click="routerPush('/auth/login')">로그인</v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer> </v-navigation-drawer>

    <v-navigation-drawer location="right" border="none"> </v-navigation-drawer>

    <v-main>
      <v-tabs v-model="tab" align-tabs="center">
        <v-tab value="ALL">공통</v-tab>
        <v-tab value="ULTIMATE">ULTIMATE</v-tab>
        <v-tooltip text="관심있는 박스를 추가하세요!" location="right">
          <template #activator="{ props }">
            <v-btn
              v-bind="props"
              color="primary"
              icon="mdi-plus-thick"
              variant="plain"
              @click="addBox"
            ></v-btn>
          </template>
        </v-tooltip>
      </v-tabs>
      <slot />
    </v-main>

    <v-footer app name="footer">FOOTER</v-footer>
  </v-layout>
</template>
<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { routerPush } from '@/utils/common'
import { provide, ref } from 'vue'

const userStore = useUserStore()
const { logout } = userStore
const { loginFlag } = storeToRefs(userStore)
const tab = ref<null | string>(null)

provide('tab', tab)

async function resetTabAndPush(path: string): Promise<void> {
  tab.value = null
  await routerPush(path)
}
function addBox() {
  alert('TODO: addBox') // TODO
}
</script>
