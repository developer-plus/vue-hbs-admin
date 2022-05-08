<script lang='ts' setup>
import { PageWrapper } from '~/components/Page'
import TickForm from '~/components/tickForm/src/TickForm.vue'

// generatorParams,
//   update,
//   reset,
//   navieValidator,
//   validator,
//   _value
const TickFromRef = ref<any>()

const options: TickFormItem[] = [
  {
    label: '账号',
    key: 'username',
    type: 'Input',
    required: true
  }
]
function generatorParams() {
  // if (!TickFromRef.value) {
  //   return
  // }
}
</script>

<template>
  <div>
    <page-wrapper title="tick动态表单">
      <tick-form ref="TickFromRef" :options="options" />
    </page-wrapper>
    <button @click="generatorParams">
      获取参数
    </button>
  </div>
</template>

<style lang='scss' scoped>
</style>
