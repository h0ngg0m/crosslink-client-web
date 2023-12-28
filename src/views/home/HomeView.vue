<template>
  <v-window v-model="tab">
    <v-window-item value="ALL">
      <CommonTabContent />
    </v-window-item>
    <v-window-item value="ULTIMATE"> UL </v-window-item>
  </v-window>
</template>
<script setup lang="ts">
import CommonTabContent from '@/views/home/CommonTabContent.vue'
import { inject } from 'vue'

const tab = inject<null | string>('tab', null)
</script>
