<template>
  <GoogleLogin :callback="callback" />
</template>

<script setup lang="ts">
import { GoogleLogin } from 'vue3-google-login'
import { postApi } from '@/utils/api'

async function callback(result) {
  const response = await postApi('/api/v1/auth/login/google', {
    credential: result.credential
  })
  console.log(response)
}
</script>
