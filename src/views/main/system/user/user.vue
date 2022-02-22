<template>
  <div class="user">
    <page-search :search-form-config="searchFormConfig" />

    <div class="content">
      <h-table :list-data="userList" :propList="propList" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'

import PageSearch from '@/components/page-search'
import HTable from '@/base-ui/table'

import { searchFormConfig } from './config/search-config'

const store = useStore()
store.dispatch('system/getPageListAction', {
  pageUrl: '/users/list',
  queryInfo: {
    offset: 0
  }
})

const userList = computed(() => store.state.system.userList)
const userCount = computed(() => store.state.system.userCount)

const propList = [
  { prop: 'name', label: '用户名', minWidth: '100' },
  { prop: 'realname', label: '真实姓名', minWidth: '100' },
  { prop: 'cellphone', label: '电话号码', minWidth: '100' },
  { prop: 'enable', label: '状态', minWidth: '100' },
  { prop: 'createAt', label: '创建时间', minWidth: '250' },
  { prop: 'cellphone', label: '更新事件', minWidth: '250' },
  { prop: 'cellphone', label: '电话号码', minWidth: '120' }
]
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
