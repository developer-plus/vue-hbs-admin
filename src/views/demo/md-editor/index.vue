<template>
  <div>
    <a-card title="Markdown 编辑器" :bordered="false" w-full>
      <div ref="domRef" />
      <div w-full mt="20px" align="center">
        <p w-full>
          使用 Viditor 作为 Markdown 编辑器
        </p>
        <p w-full>
          Github Repo: <a
            href="https://github.com/Vanessa219/vditor"
          >https://github.com/Vanessa219/vditor</a>
        </p>
      </div>
    </a-card>
  </div>
</template>
<script setup lang="ts">
import Vditor from 'vditor'
import 'vditor/src/assets/scss/index.scss'

const editor = ref<Vditor>()
const domRef = ref<HTMLElement>()
const editorInitHeight = ref(500)

// TODO 等待黑暗模式支持，这里需要同步切换
function renderEditor() {
  if (!domRef.value) return
  editor.value = new Vditor(domRef.value, {
    minHeight: editorInitHeight.value,
    // 'dark'/'classic'
    theme: 'classic',
    icon: 'ant',
    cache: { enable: false },
    value: '# Hello World!\n你好世界'
  })
}

onMounted(() => {
  renderEditor()
})

</script>
