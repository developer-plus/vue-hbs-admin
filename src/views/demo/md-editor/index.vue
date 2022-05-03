<template>
  <page-wrapper title="markdown 编辑器">
    <a-card title="Markdown 编辑器" :bordered="false" class="enter-y w-full">
      <div ref="domRef">
        <a-spin tip="正在加载编辑器中" />
      </div>
      <div w-full mt="20px" align="center">
        <p w-full>
          使用 Viditor 作为 Markdown 编辑器
        </p>
        <p w-full>
          Github Repo: <a href="https://github.com/Vanessa219/vditor">https://github.com/Vanessa219/vditor</a>
        </p>
      </div>
    </a-card>
    <a-card title="Markdown 显示器" class="enter-y !mt-16px">
      <div v-html="valueHTML" />
    </a-card>
    <a-card title="Markdown value HTML" class="enter-y !mt-16px">
      <textarea v-model="valueHTML" readonly w-full h="200px" outline="none" />
    </a-card>
  </page-wrapper>
</template>
<script setup lang="ts">
import { promiseTimeout } from '@vueuse/core'
import Vditor from 'vditor'
import { PageWrapper } from '~/components/Page'
import 'vditor/dist/index.css'

const domRef = ref<HTMLElement>()
const editor = ref<Vditor>()
// 编辑器的最小高度
const editorInitHeight = ref(300)
const valueHTML = ref()

function renderEditor() {
  if (!domRef.value) return
  editor.value = new Vditor(domRef.value, {
    // https://ld246.com/article/1549638745630#options
    // 在官方文档查看查看更多配置项
    minHeight: editorInitHeight.value,
    // 编辑器主题：'dark'/'classic'
    // TODO 等待后期支持黑暗模式，这里需要进行同步切换
    theme: 'classic',
    icon: 'ant',
    // 是否使用 localStorage 缓存，如果 true
    // 必须给定 id，id 是 localStorage 的 key，例如：cache: { enable: true, id: "hbs-md-editor-value" }
    cache: { enable: false },
    value: '# Hello World!\n你好世界',
    placeholder: '请输入内容...',
    after() {
      mockAsyncData()
      getHTML()
    },
    input() {
      // input 事件
      getHTML()
    },
    focus() {
      // focus 事件
    },
    blur() {
      // blur 事件
    },
    // 'sv': 双屏 | 'ir': 即时预览 | 'wysiwyg': 所见即所得
    mode: 'ir',
    counter: {
      enable: true, // 启用计数器
      max: 500, // 最大值
      type: 'markdown' // 统计的类型： markdown | text
    },
    outline: {
      enable: true, // 是否展示大纲
      position: 'left' // 大纲位置，'left' | 'right'
    }
  })
}

function getHTML() {
  valueHTML.value = editor.value?.getHTML()
}

async function mockAsyncData() {
  await promiseTimeout(2000)
  editor.value?.setValue('模拟异步数据')
  getHTML()
}

onMounted(() => {
  renderEditor()
})

onBeforeUnmount(() => {
  // 组件销毁，同时销毁编辑器
  editor.value?.destroy()
})
</script>
