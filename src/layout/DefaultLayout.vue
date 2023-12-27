<template>
  <v-layout>
    <v-app-bar flat color="primary">
      <v-app-bar-title text="CrossLink"></v-app-bar-title>
      <template #append>
        <v-tooltip v-if="loginFlag" text="마이 페이지" location="bottom">
          <template #activator="{ props }">
            <v-btn v-bind="props" icon="mdi-account"></v-btn>
          </template>
        </v-tooltip>
        <v-tooltip v-if="loginFlag" text="로그아웃" location="bottom">
          <template #activator="{ props }">
            <v-btn v-bind="props" icon="mdi-logout" @click="logout"></v-btn>
          </template>
        </v-tooltip>
        <v-tooltip v-else text="로그인" location="bottom">
          <template #activator="{ props }">
            <v-btn v-bind="props" icon="mdi-login" @click="routerPush('/auth/login')"></v-btn>
          </template>
        </v-tooltip>
      </template>
    </v-app-bar>

    <v-navigation-drawer border="none"> </v-navigation-drawer>

    <v-navigation-drawer location="right" border="none"> </v-navigation-drawer>

    <v-main>
      <slot />
    </v-main>

    <v-footer app name="footer">FOOTER</v-footer>
  </v-layout>
</template>
<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { routerPush } from '@/utils/common'

const userStore = useUserStore()
const { logout } = userStore
const { loginFlag } = storeToRefs(userStore)
</script>
