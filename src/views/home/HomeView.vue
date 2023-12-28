<template>
  <v-window v-model="tab">
    <v-window-item value="ALL">
      <CommonTabContent />
    </v-window-item>
    <v-window-item value="ULTIMATE"> UL </v-window-item>
  </v-window>
</template>
<script setup lang="ts">
import { useVModel } from '@vueuse/core'
import CommonTabContent from '@/views/home/CommonTabContent.vue'

const props = defineProps<{
  tab: string | null
}>()

const emits = defineEmits<{
  (e: 'update:tab', v: string | null): void
}>()

const tab = useVModel(props, 'tab', emits)
</script>
