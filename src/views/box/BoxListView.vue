<template>
  <p class="text-h5 mt-3">전체 박스 목록</p>

  <p class="text-h6 mt-8">서울</p>
  <v-divider />
  <BoxList :boxes="boxes['서울']" />

  <p class="text-h6 mt-8">부산</p>
  <v-divider />
  <BoxList :boxes="boxes['부산']" />

  <p class="text-h6 mt-8">대구</p>
  <v-divider />
  <BoxList :boxes="boxes['대구']" />

  <p class="text-h6 mt-8">인천</p>
  <v-divider />
  <BoxList :boxes="boxes['인천']" />

  <p class="text-h6 mt-8">광주</p>
  <v-divider />
  <BoxList :boxes="boxes['광주']" />

  <p class="text-h6 mt-8">대전</p>
  <v-divider />
  <BoxList :boxes="boxes['대전']" />

  <p class="text-h6 mt-8">울산</p>
  <v-divider />
  <BoxList :boxes="boxes['울산']" />

  <p class="text-h6 mt-8">세종</p>
  <v-divider />
  <BoxList :boxes="boxes['세종']" />

  <p class="text-h6 mt-8">경기</p>
  <v-divider />
  <BoxList :boxes="boxes['경기']" />

  <p class="text-h6 mt-8">강원</p>
  <v-divider />
  <BoxList :boxes="boxes['강원']" />

  <p class="text-h6 mt-8">충북</p>
  <v-divider />
  <BoxList :boxes="boxes['충북']" />

  <p class="text-h6 mt-8">충남</p>
  <v-divider />
  <BoxList :boxes="boxes['충남']" />

  <p class="text-h6 mt-8">전북</p>
  <v-divider />
  <BoxList :boxes="boxes['전북']" />

  <p class="text-h6 mt-8">전남</p>
  <v-divider />
  <BoxList :boxes="boxes['전남']" />

  <p class="text-h6 mt-8">경북</p>
  <v-divider />
  <BoxList :boxes="boxes['경북']" />

  <p class="text-h6 mt-8">경남</p>
  <v-divider />
  <BoxList :boxes="boxes['경남']" />

  <p class="text-h6 mt-8">제주</p>
  <v-divider />
  <BoxList :boxes="boxes['제주']" />
</template>
<script setup lang="ts">
import BoxList from '@/views/box/BoxList.vue'

const boxes = {
  서울: [
    {
      id: 1,
      name: '서울 박스 1'
    },
    {
      id: 2,
      name: '서울 박스 1'
    },
    {
      id: 3,
      name: '서울 박스 3'
    }
  ],
  부산: [],
  대구: [],
  인천: [],
  광주: [],
  대전: [],
  울산: [],
  세종: [],
  경기: [],
  강원: [],
  충북: [],
  충남: [],
  전북: [],
  전남: [],
  경북: [],
  경남: [],
  제주: []
}

// TODO: 박스 목록 api 사용 / 캐싱 고려
</script>
