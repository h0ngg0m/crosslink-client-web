<template>
  <el-tiptap v-model:content="content" :extensions="extensions" output="json" height="500px" />
</template>

<script setup>
import { ref } from 'vue'
import { lowlight } from 'lowlight'

import {
  Document,
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
  CodeBlock,
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
} from 'element-tiptap'
import { CodeBlockLowlight } from '@tiptap/extension-code-block-lowlight'

const extensions = [
  Document,
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
  CodeBlockLowlight.configure({ lowlight }),
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
