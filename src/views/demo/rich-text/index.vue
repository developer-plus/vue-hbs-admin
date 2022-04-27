<template>
  <page-wrapper title="富文本编辑器">
    <a-card title="富文本编辑器" class="enter-y">
      <template #extra>
        <a-space>
          <a-button type="primary" @click="insertText">
            插入文本
          </a-button>
          <a-button type="primary" @click="printHtml">
            打印 HTML
          </a-button>
          <a-button type="primary" @click="disableOrEnable">
            禁止/启用
          </a-button>
        </a-space>
      </template>
      <div style="border: 1px solid #ccc">
        <Toolbar
          :editor="editorRef"
          :default-config="toolbarConfig"
          :mode="mode"
          style="border-bottom: 1px solid #ccc"
        />
        <Editor
          v-model="valueHtml"
          :default-config="editorConfig"
          :mode="mode"
          style="height: 300px; overflow-y: hidden"
          @on-created="handleCreated"
          @on-change="handleChange"
          @on-destroyed="handleDestroyed"
          @on-focus="handleFocus"
          @on-blur="handleBlur"
          @custom-alert="customAlert"
          @custom-paste="customPaste"
        />
      </div>
    </a-card>
    <a-card title="富文本显示器" class="enter-y !mt-16px">
      <div v-html="valueHtml" />
    </a-card>
    <a-card title="富文本 valueHtml" class="enter-y !mt-16px">
      <textarea
        v-model="valueHtml"
        readonly
        style="width: 100%; height: 200px; outline: none"
      />
    </a-card>
  </page-wrapper>
</template>

<script setup lang="ts">
// 开源 Web 富文本编辑器 wangEditor，https://www.wangeditor.com
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { PageWrapper } from '~/components/Page'

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()
// 内容 HTML
const valueHtml = ref('<p>hello</p>')

const mode = 'default' // 或 'simple'
const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }

// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
  }, 1500)
})
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor === null) return
  editor.destroy()
})

// 编辑器回调函数
const handleCreated = (editor) => {
  // console.log('created', editor)
  editorRef.value = editor // 记录 editor 实例，重要！
}
const handleChange = (editor) => {
  // console.log('change:', editor.getHtml())
}
const handleDestroyed = (editor) => {
  // console.log('destroyed', editor)
}
const handleFocus = (editor) => {
  // console.log('focus', editor)
}
const handleBlur = (editor) => {
  // console.log('blur', editor)
}
const customAlert = (info, type) => {
  // alert(`【自定义提示】${type} - ${info}`)
}
const customPaste = (editor, event, callback) => {
  // console.log('ClipboardEvent 粘贴事件对象', event)
  // 自定义插入内容
  editor.insertText('xxx')
  // 返回值（注意，vue 事件的返回值，不能用 return）
  // 返回 false ，阻止默认粘贴行为
  // callback(false)
  // 返回 true ，继续默认的粘贴行为
  // callback(true)
}
const insertText = () => {
  const editor = editorRef.value
  if (editor === null) return
  editor.insertText('vue-hbs-admin 富文本编辑器')
}
const printHtml = () => {
  const editor = editorRef.value
  // if (editor === null) return
  // alert(editor.getHtml())
}
const disableOrEnable = () => {
  const editor = editorRef.value
  if (editor === null) return
  if (editor.isDisabled()) { editor.enable() }
  else { editor.disable() }
}
</script>
