<template>
  <a-layout class="h-full hbs-layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible width="210px">
      <NavMenu />
    </a-layout-sider>

    <a-layout>
      <a-layout-header style="background: #fff; padding: 0;">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script setup lang="ts">
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons-vue'
import { NavMenu } from '~/components/NavMenu'

const collapsed = ref<boolean>(false)
</script>

<style lang="less">
.hbs-layout {
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
  }

  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #1890ff;
    }
  }
}
</style>
