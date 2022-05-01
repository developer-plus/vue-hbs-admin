<template>
  <div flex mb-20px>
    <div>
      <span>主题: </span>
      <a-select v-model:value="theme" w-200px :options="themeList" @change="onChangeTheme" />
    </div>
    <div ml-20px>
      <span>语言: </span>
      <a-select v-model:value="lang" w-200px :options="langList" @change="onChangeLang" />
    </div>
  </div>
  <code-editor v-model:value="code" :theme="theme" :lang="lang" @change="onCodeChange" />
</template>

<script setup lang="ts">
// sql高亮 提示
import 'codemirror/mode/sql/sql'
import 'codemirror/addon/hint/sql-hint'
// javascript 高亮提示
import 'codemirror/addon/hint/javascript-hint'
import 'codemirror/mode/javascript/javascript'
// 主题
import 'codemirror/theme/3024-day.css'
import 'codemirror/theme/3024-night.css'
import 'codemirror/theme/abcdef.css'
import 'codemirror/theme/ayu-dark.css'
import { message } from 'ant-design-vue'
import CodeEditor from '~/components/CodeEditor/src/CodeEditor.vue'

const theme = ref('ambiance')
const lang = ref('sql')
const code = ref('')

const themeList = [
  {
    value: 'ambiance',
    label: 'ambiance'
  },
  {
    value: '3024-day',
    label: '3024-day'
  },
  {
    value: '3024-night',
    label: '3024-night'
  },
  {
    value: 'abcdef',
    label: 'abcdef'
  },
  {
    value: 'ayu-dark',
    label: 'ayu-dark'
  }
]

const langList = [
  {
    value: 'javascript',
    label: 'javascript'
  },
  {
    value: 'sql',
    label: 'sql'
  }
]

function onChangeTheme(theme: string) {
  message.success(`操作成功!当前主题为:${theme}`)
}
function onChangeLang(lang: string) {
  message.success(`操作成功!当前主题为:${lang}`)
}
function onCodeChange(code: string) {}
</script>
