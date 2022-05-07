<template>
  <page-wrapper title="code 编辑器">
    <div flex mb-20px>
      <div>
        <span>主题: </span>
        <a-select
          v-model:value="theme"
          w-200px
          :options="themeList"
          @change="onChangeTheme"
        />
      </div>
      <div ml-20px>
        <span>语言: </span>
        <a-select
          v-model:value="lang"
          w-200px
          :options="langList"
          @change="onChangeLang"
        />
      </div>
    </div>
    <div w-full>
      <code-editor
        v-model:value="code"
        :theme="theme"
        :lang="lang"
        width="100%"
        height="300px"
      />
    </div>
  </page-wrapper>
</template>

<script setup lang="ts">
import { message } from 'ant-design-vue'
import { PageWrapper } from '~/components/Page'
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
import CodeEditor from '~/components/CodeEditor/src/CodeEditor.vue'

const theme = ref('ambiance')
const lang = ref('javascript')
const code = ref('')

function handleList(list: string[]) {
  return list.map(item => ({ value: item, label: item }))
}
const rawThemeList = ['ambiance', '3024-day', '3024-night', 'ayu-dark']
const themeList = handleList(rawThemeList)

const rawLangList = ['javascript', 'sql']
const langList = handleList(rawLangList)

function onChangeTheme(theme: string) {
  message.success(`操作成功!当前主题为:${theme}`)
}
function onChangeLang(lang: string) {
  message.success(`操作成功!当前主题为:${lang}`)
}
</script>
