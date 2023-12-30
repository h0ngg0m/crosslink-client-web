<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <v-select
          :items="categories"
          label="카테고리"
          v-model="selectedCategory"
          outlined
        ></v-select>
      </v-col>

      <v-col cols="12" sm="6">
        <v-text-field label="제목" v-model="title" outlined></v-text-field>
      </v-col>
    </v-row>
  </v-container>
  <el-tiptap :content="content" :extensions="extensions" output="json" height="500px" />
</template>

<script setup>
import { ref } from 'vue'

import {
  Doc,
  Text,
  Paragraph,
  Heading,
  Bold,
  Underline,
  FontSize,
  FontFamily,
  Italic,
  TextAlign,
  Image,
  Iframe,
  Strike,
  Table,
  Color,
  Highlight,
  SelectAll,
  History,
  Link,
  BulletList,
  OrderedList
} from 'element-tiptap-vue3-fixed'

const extensions = [
  Doc,
  Text,
  Paragraph,
  Heading.configure({ level: 5 }),
  Bold.configure({ bubble: true }),
  Underline.configure({ bubble: true, menubar: false }),
  FontSize,
  FontFamily,
  Italic,
  TextAlign.configure({ bubble: true }),
  Image,
  Iframe,
  Strike,
  Table.configure({ resizable: true }),
  Color,
  Highlight,
  SelectAll,
  History,
  Link.configure({ bubble: true }),
  BulletList,
  OrderedList
]

const content = ref(`
  <h1>Heading</h1>
  <p>This Editor is awesome!</p>
`)

const category = ref('')
const title = ref('')
</script>
