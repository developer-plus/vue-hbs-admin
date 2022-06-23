<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { PageWrapper } from '~/components/Page'
import TickForm from '~/components/TickForm/src/TickForm.vue'

const TickFromRef = ref<TickFormType | null>(null)

const options: TickFormItem[] = [
  {
    label: '账号',
    key: 'username',
    type: 'Input',
    reset() {
      return '自定义单独项目'
    }
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
function reset() {
  TickFromRef.value?.reset()
}
</script>

<template>
  <a-card title="表单重置">
    <tick-form ref="TickFromRef" :options="options" />
    <a-button @click="reset">
      表单重制
    </a-button>
  </a-card>
</template>

<style lang="scss" scoped></style>
