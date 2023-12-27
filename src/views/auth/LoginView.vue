<template>
  <div>
    <v-img
      src="/src/assets/images/google/web_light_sq_na@4x.png"
      :width="100"
      style="cursor: pointer"
      @click="googleLogin"
    />
  </div>
  <div>
    <v-img
      src="/src/assets/images/naver/btnG_아이콘사각.png"
      :width="100"
      style="cursor: pointer"
      @click="naverLogin"
    />
  </div>
</template>

<script setup lang="ts">
import { generateUUID } from '@/utils/common'
function googleLogin(): void {
  location.replace(
    `https://accounts.google.com/o/oauth2/v2/auth?client_id=${
      import.meta.env.VITE_GOOGLE_CLIENT_ID
    }&redirect_uri=${
      import.meta.env.VITE_GOOGLE_CALLBACK_URL
    }&response_type=code&scope=email profile`
  )
}

function naverLogin(): void {
  location.replace(
    `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${
      import.meta.env.VITE_NAVER_CLIENT_ID
    }&redirect_uri=${import.meta.env.VITE_NAVER_CALLBACK_URL}&state=${generateUUID()}`
  )
}
</script>
