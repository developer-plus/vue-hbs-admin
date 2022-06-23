<script lang="ts" setup>
import TickForm from '~/components/TickFrom/src/TickForm.vue'

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
    },
    watchKey: ['username'],
    watchCallBack(params: TickFormData[], value: string[], self: TickFormData) {
      // console.log('%c [params]-28-「watch.vue」', 'font-size:13px; background:pink; color:#bf2c9f;', params)
      // console.log('%c [value]-29-「watch.vue」', 'font-size:13px; background:pink; color:#bf2c9f;', value)
      // console.log('%c [self]-30-「watch.vue」', 'font-size:13px; background:pink; color:#bf2c9f;', self)
    }
  }
]
</script>

<template>
  <a-card title="表单项目之间互相监听">
    <tick-form ref="TickFromRef" :options="options" />
    <p>在账号内输入可获取log</p>
  </a-card>
</template>

<style lang="scss" scoped></style>
