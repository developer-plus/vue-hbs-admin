<script lang="ts" setup>
import { message } from 'ant-design-vue'
import { PageWrapper } from '~/components/Page'
import TickForm from '~/components/TickFrom/src/TickForm.vue'

const TickFromRef = ref<TickFormType | null>(null)

const options: TickFormItem[] = [
  {
    label: '账号',
    key: 'username',
    type: 'Input',
    defaultValue: '默认值'
  },
  {
    label: '分割',
    key: 'tick',
    type: 'Input',
    defaultValue: '默认分割',
    reconfiguration(value) {
      return [
        {
          key: 's1',
          value: value[0]
        },
        {
          key: 's2',
          value: value[1]
        }
      ]
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
function generatorParams() {
  const params = TickFromRef.value?.generatorParams()
  // console.log('%c [params]-33-「params.vue」', 'font-size:13px; background:pink; color:#bf2c9f;', params)
}
</script>

<template>
  <a-card title="参数获取">
    <tick-form ref="TickFromRef" :options="options" />
    <a-button @click="generatorParams">
      获取参数
    </a-button>
    <p>
      分割字段默认的key其实是tick，按照逻辑参数应该输出key字段，可是我在此配置项种加入了重构参数，所以tick被分割成了多个字段
    </p>
  </a-card>
</template>

<style lang="scss" scoped></style>
