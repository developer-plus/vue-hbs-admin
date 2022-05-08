<script lang='ts' setup>
import { message } from 'ant-design-vue'
import { PageWrapper } from '~/components/Page'
import TickForm from '~/components/tickForm/src/TickForm.vue'

const TickFromRef = ref<TickFormType | null>(null)

const options: TickFormItem[] = [
  {
    label: '账号',
    key: 'username',
    type: 'Input',
    ant: true
  },
  {
    label: '爱好',
    key: 'like',
    type: 'Select',
    axiosOptions() {
      return new Promise((resolve, reject) => {
        resolve([
          {
            label: '12222',
            value: '121'
          }
        ])
      })
    },
    ant: true
  }
]
function generatorParams() {
  TickFromRef.value?.antValidator(() => {
    // console.log('%c [isValidator]-34-ant.vue」', 'font-size:13px; background:pink; color:#bf2c9f;', '验证通过')
  })
}
</script>

<template>
  <a-card title="表单验证方式1">
    <tick-form ref="TickFromRef" :options="options" />
    <a-button @click="generatorParams">
      获取参数
    </a-button>
  </a-card>
</template>

<style lang='scss' scoped>
</style>
