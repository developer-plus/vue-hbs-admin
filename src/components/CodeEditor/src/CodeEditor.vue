<template>
  <div class="code-mirror" :style="{width: widthComputed, height: heightComputed}">
    <textarea
      ref="textareaRef"
      class="code-textarea"
    />
  </div>
</template>

<script setup lang="ts">
import 'codemirror/theme/ambiance.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/edit/matchbrackets'
import 'codemirror/addon/selection/active-line'
import 'codemirror/addon/hint/show-hint'
import CodeMirror from 'codemirror'
import { merge } from 'lodash-es'
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
  lang: 'sql',
  theme: 'ambiance',
  editorOptions: () => ({})
})

const widthComputed = computed(() => {
  return isNumber(props.width) ? `${props.width}px` : props.width
})

const heightComputed = computed(() => {
  return isNumber(props.height) ? `${props.height}px` : props.height
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
  extraKeys: { Ctrl: 'autocomplete' },
  hintOptions: { // 自定义提示选项
    completeSingle: false
  }
}
const options = merge(defaultOptions, props.editorOptions)

onMounted(() => {
  const editor = CodeMirror.fromTextArea(textareaRef.value as HTMLTextAreaElement, options)
  editor.on('inputRead', () => {
    editor.showHint()
  })
  editor.on('change', () => {
    emits('update:value', editor.getValue())
    emits('change', editor.getValue())
  })
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
