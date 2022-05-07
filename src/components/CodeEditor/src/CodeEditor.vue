<template>
  <div class="code-mirror" :style="getStyle">
    <textarea ref="textareaRef" class="code-textarea" />
  </div>
</template>

<script setup lang="ts">
import 'codemirror/theme/ambiance.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/edit/matchbrackets'
import 'codemirror/addon/selection/active-line'
import 'codemirror/addon/hint/show-hint'
import 'codemirror/addon/hint/javascript-hint'
import 'codemirror/mode/javascript/javascript'

import CodeMirror from 'codemirror'
import { merge, debounce } from 'lodash-es'
import { isNumber } from '~/utils/is'

interface Props {
  value: string
  width?: string | number
  height?: string | number
  lang?: string
  theme?: string
  editorOptions?: object
}

const props = withDefaults(defineProps<Props>(), {
  value: '',
  width: 600,
  height: 200,
  lang: 'javascript',
  theme: 'ambiance',
  editorOptions: () => ({})
})

const getStyle = computed(() => {
  return {
    width: isNumber(props.width) ? `${props.width}px` : props.width,
    height: isNumber(props.height) ? `${props.height}px` : props.height
  }
})

const emits = defineEmits(['update:value', 'change'])

const textareaRef = ref<HTMLTextAreaElement | null>(null)
const defaultOptions = {
  mode: props.lang,
  indentWithTabs: true,
  smartIndent: true,
  lineNumbers: true,
  matchBrackets: true,
  theme: props.theme,
  hintOptions: {
    // 自定义提示选项
    completeSingle: false
  }
}
const options = merge(defaultOptions, props.editorOptions)

onMounted(() => {
  const editor = CodeMirror.fromTextArea(
    textareaRef.value as HTMLTextAreaElement,
    options
  )

  // 每当从隐藏的文本区域（由用户键入或粘贴）读取新输入时触发
  editor.on(
    'inputRead',
    debounce((instance, changeObj) => {
      const changeText = changeObj.text[0]
      // 处理没有代码时，显示代码提示
      if (changeText === '') return
      const excludeReg = /[\s()\[\]{};:>]/
      if (!excludeReg.test(changeText)) {
        editor.showHint()
      }
    })
  )

  editor.on(
    'change',
    debounce(() => {
      emits('update:value', editor.getValue())
      emits('change', editor.getValue())
    })
  )
  watch(
    () => props.value,
    (newValue) => {
      const position = editor.getCursor()
      editor.setValue(newValue)
      editor.setCursor(position)
    },
    {
      immediate: true
    }
  )
  watch(
    () => props.theme,
    (newValue) => {
      editor.setOption('theme', newValue)
    }
  )
  watch(
    () => props.lang,
    (newValue) => {
      editor.setOption('mode', newValue)
    }
  )
})
</script>

<style lang="less" scoped>
.code-mirror {
  .code-textarea {
    display: none;
  }
  :deep(.CodeMirror) {
    height: 100%;
  }
}
</style>
