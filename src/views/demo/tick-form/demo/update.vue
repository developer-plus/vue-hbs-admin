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
function update() {
  TickFromRef.value?.update({
    username: '更新的值',
    like: '121'
  })
}
</script>

<template>
  <a-card title="参数获取">
    <tick-form ref="TickFromRef" :options="options" />
    <a-button @click="update">
      更新
    </a-button>
  </a-card>
</template>

<style lang='scss' scoped>
</style>
