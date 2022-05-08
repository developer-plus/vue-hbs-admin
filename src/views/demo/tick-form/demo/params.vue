<script lang='ts' setup>
import { message } from 'ant-design-vue'
import { PageWrapper } from '~/components/Page'
import TickForm from '~/components/tickForm/src/TickForm.vue'

const TickFromRef = ref<TickFormType | null>(null)

const options: TickFormItem[] = [
  {
    label: '账号',
    key: 'username',
    type: 'Input'
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
    }
  }
]
function generatorParams() {
  const params = TickFromRef.value?.generatorParams()
  // console.log('%c [params]-33-「params.vue」', 'font-size:13px; background:pink; color:#bf2c9f;', params)
  message.success(JSON.stringify(params))
}
</script>

<template>
  <a-card title="参数获取">
    <tick-form ref="TickFromRef" :options="options" />
    <a-button @click="generatorParams">
      获取参数
    </a-button>
  </a-card>
</template>

<style lang='scss' scoped>
</style>
