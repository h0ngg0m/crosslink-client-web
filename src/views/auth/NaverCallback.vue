<template>
  <div class="d-flex justify-center align-center h-100">
    <v-progress-circular indeterminate :size="50"></v-progress-circular>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onBeforeMount } from 'vue'
import { postApi } from '@/utils/api'
import { routerPush } from '@/utils/common'
import { useUserStore } from '@/stores/user'

const route = useRoute()
const { saveAccessToken } = useUserStore()

onBeforeMount(async () => {
  const response = await postApi('/api/v1/auth/login/naver', {
    code: route.query.code,
    state: route.query.state
  })
  if (response.status === 200 && response.data.meta.code === 200) {
    saveAccessToken(response.data.data.accessToken)
    await routerPush('/')
  } else {
    await routerPush('/auth/login')
  }
})
</script>
