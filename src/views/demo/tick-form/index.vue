<script lang='ts' setup>
import Params from './demo/params.vue'
import Ant from './demo/ant.vue'
import Validator from './demo/validator.vue'
import { PageWrapper } from '~/components/Page/index'

</script>

<template>
  <page-wrapper title="tick动态表单">
    <params />
    <validator />x
    <ant />
  </page-wrapper>
</template>

<style lang='scss' scoped>
</style>
