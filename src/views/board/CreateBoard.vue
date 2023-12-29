<template>
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
  Italic,
  TextAlign,
  Image,
  Iframe,
  Strike,
  Table,
  Color,
  Highlight,
  Fullscreen,
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
  Italic,
  TextAlign.configure({ bubble: true }),
  Image,
  Iframe,
  Strike,
  Table.configure({ resizable: true }),
  Color,
  Highlight,
  Fullscreen,
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
</script>
