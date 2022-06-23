<script lang='ts' setup>
import Params from './demo/params.vue'
import Ant from './demo/ant.vue'
import Reset from './demo/reset.vue'
import Watch from './demo/watch.vue'
import Validator from './demo/validator.vue'
import Update from './demo/update.vue'
import { PageWrapper } from '~/components/Page/index'

const message = '想要看效果，请找到demo中所有的log，并且解开注释。一下演示的功能函数，大多都可以在自己的配置中去自定义执行demo并未展示完全。组件并未涉及完整、响应式布局并未实现等pr通过后再次添加。'
</script>

<template>
  <page-wrapper title="tick动态表单">
    <a-alert :message="message" type="success" />
    <params />
    <validator />
    <ant />
    <reset />
    <watch />
    <update />
  </page-wrapper>
</template>

<style lang='scss' scoped>
</style>
