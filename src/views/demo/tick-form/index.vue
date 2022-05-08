<script lang='ts' setup>
import Params from './demo/params.vue'
import Ant from './demo/ant.vue'
import Reset from './demo/reset.vue'
import Watch from './demo/watch.vue'
import Validator from './demo/validator.vue'
import Update from './demo/update.vue'
import { PageWrapper } from '~/components/Page/index'

</script>

<template>
  <page-wrapper title="tick动态表单">
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
