<template>
  <div class="user">
    <page-search :search-form-config="searchFormConfig" />

    <div class="content">
      <h-table
        :list-data="userList"
        :propList="propList"
        :show-index-column="showIndexColumn"
        :show-select-column="showSelectColumn"
        @selection-change="handleSelectionChange"
      >
        <template #enable="scoped">
          <el-button plain size="small" :type="scoped.row.enable ? 'success' : 'danger'">
            {{ scoped.row.enable ? '启用' : '禁用' }}
          </el-button>
        </template>

        <template #createAt="scoped">
          {{ $filters.formatTime(scoped.row.createAt) }}
        </template>

        <template #updateAt="scoped">
          {{ $filters.formatTime(scoped.row.updateAt) }}
        </template>

        <template #handle>
          <div class="handle-btns">
            <el-button size="small" type="text" :icon="Edit">编辑</el-button>
            <el-button size="small" type="text" :icon="Delete">删除</el-button>
          </div>
        </template>
      </h-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'

import PageSearch from '@/components/page-search'
import HTable from '@/base-ui/table'
import { Edit, Delete } from '@element-plus/icons-vue'

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
  { prop: 'name', label: '用户名', minWidth: '100', slotName: 'name' },
  { prop: 'realname', label: '真实姓名', minWidth: '100', slotName: 'realname' },
  { prop: 'cellphone', label: '电话号码', minWidth: '100', slotName: 'cellphone' },
  { prop: 'enable', label: '状态', minWidth: '100', slotName: 'enable' },
  { prop: 'createAt', label: '创建时间', minWidth: '250', slotName: 'createAt' },
  { prop: 'updateAt', label: '更新时间', minWidth: '250', slotName: 'updateAt' },
  { prop: 'cellphone', label: '电话号码', minWidth: '120', slotName: 'cellphone' },
  { label: '操作', minWidth: '120', slotName: 'handle' }
]

const showIndexColumn = true
const showSelectColumn = true

const handleSelectionChange = (value: any) => {
  console.log(value)
}
</script>

<style scoped lang="less">
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
