<template>
  <div class="page-content">
    <h-table :list-data="userList" v-bind="contentTableConfig" @selection-change="handleSelectionChange">
      <template #headerHandler>
        <el-button type="primary">新建用户</el-button>
      </template>

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
</template>

<script setup lang="ts">
import { computed, defineProps, defineExpose } from 'vue'
import { useStore } from '@/store'

import HTable from '@/base-ui/table'
import { Edit, Delete } from '@element-plus/icons-vue'

const props = defineProps({
  pageName: {
    type: String,
    required: true
  },
  contentTableConfig: {
    type: Object,
    required: true
  }
})

const store = useStore()

const getPageData = (queryInfo: any = {}) => {
  store.dispatch('system/getPageListAction', {
    pageName: props.pageName,
    queryInfo: {
      offset: 0,
      ...queryInfo
    }
  })
}
getPageData()

const userList = computed(() => store.getters['system/pageListData'](props.pageName))
const userCount = computed(() => store.state.system.usersCount)

const handleSelectionChange = (value: any) => {
  console.log(value)
}

defineExpose({
  getPageData
})
</script>

<style scoped lang="less">
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
