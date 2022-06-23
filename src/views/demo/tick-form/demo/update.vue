<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { PageWrapper } from '~/components/Page'
import TickForm from '~/components/TickFrom/src/TickForm.vue'

const TickFromRef = ref<TickFormType | null>(null)

const options: TickFormItem[] = [
  {
    label: '账号',
    key: 'username',
    type: 'Input'
  },
  {
    label: '密码',
    key: 'password',
    type: 'Input',
    proxyKey: ['tick']
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
    like: '121',
    tick: 'tick'
  })
}
</script>

<template>
  <a-card title="参数更新">
    <tick-form ref="TickFromRef" :options="options" />
    <a-button @click="update">
      更新
    </a-button>
    <p>
      密码的key其实是password，但是我让他代理了tick当数据中存在tick字段时也会更新
    </p>
  </a-card>
</template>

<style lang="scss" scoped></style>
