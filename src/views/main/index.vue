<template>
  <a-layout class="h-full hbs-layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible width="210px">
      <NavMenu />
    </a-layout-sider>

    <a-layout>
      <a-layout-header class="hbs-header">
        <div class="hbs-header-left">
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
        </div>

        <div class="hbs-header-right">
          Hongbusi
        </div>
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
import { NavMenu } from '~/components/NavMenu/index'

const collapsed = ref<boolean>(false)
</script>

<style lang="less">
.hbs-layout {
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
  }

  .hbs-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    background: #fff;

    .hbs-header-left {
      display: flex;
      align-items: center;

      .trigger {
        font-size: 18px;
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
          color: #1890ff;
        }
      }
    }

    .hbs-header-right {
      display: flex;
      align-items: center;
    }
  }
}
</style>
