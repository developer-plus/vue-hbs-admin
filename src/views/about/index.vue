<template>
  <page-wrapper title="关于" content="vue-hbs-admin 是一个基于 Vue3.0、Vite、TypeScript、Ant-Design-Vue 的后台解决方案，为后台管理系统提供现成的开箱解决方案及丰富的示例，提高开发效率。">
    <project-info class="enter-y" />
    <dependencies class="enter-y !mt-16px" />
    <dev-dependencies class="enter-y !mt-16px" />
  </page-wrapper>
</template>

<script setup lang="ts">
import ProjectInfo from './components/ProjectInfo.vue'
import Dependencies from './components/Dependencies.vue'
import DevDependencies from './components/DevDependencies.vue'
import { PageWrapper } from '~/components/Page'
</script>
