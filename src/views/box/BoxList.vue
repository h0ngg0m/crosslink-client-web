<template>
  <div class="d-flex flex-wrap">
    <v-card v-for="box in boxes" :key="box.id" class="ma-2" outlined hover>
      <div class="d-flex align-center">
        <v-img src="/src/assets/images/sample/ultimate.png" width="50" height="50" />
        <span class="mr-3">{{ box.name }}</span>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import type { Box } from '@/definitions/model'

defineProps<{
  boxes: Box[]
}>()
</script>
