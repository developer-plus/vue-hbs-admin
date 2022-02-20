<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/logo.png" alt="logo" />
      <span v-if="!isCollapse" class="title">Vue3 + TS</span>
    </div>

    <el-menu
      default-active="2"
      class="el-menu-vertical"
      :collapse="isCollapse"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单可以展开的标题 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon v-if="item.icon"><component :is="icons[item.icon]" /></el-icon>
              <span>{{ item.name }}</span>
            </template>

            <!-- 遍历 children -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.id + ''">
                <el-icon v-if="subitem.icon"><component :is="icons[subitem.icon]" /></el-icon>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <el-icon v-if="item.icon"><component :is="icons[item.icon]" /></el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { useStore } from '@/store'

import { Monitor, ChatLineRound, Goods, Setting } from '@element-plus/icons-vue'

const icons = {
  'el-icon-monitor': Monitor,
  'el-icon-setting': Setting,
  'el-icon-goods': Goods,
  'el-icon-chat-line-round': ChatLineRound
}

const store = useStore()
const userMenus = computed(() => store.state.login.userMenus)

defineProps({
  isCollapse: Boolean
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 12px 10px 8px 10px;
    height: 28px;

    .img {
      width: 30px;
      height: 30px;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
    }
  }

  .el-menu {
    border-right: none;
  }

  .el-sub-menu {
    background-color: #001529 !important;
  }

  .el-menu-item {
    padding-left: 50px !important;
    background-color: #0c2135 !important;
  }

  /deep/ .el-sub-menu__title {
    background-color: #001529 !important;
  }

  .el-menu-item:hover {
    color: #fff !important;
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
