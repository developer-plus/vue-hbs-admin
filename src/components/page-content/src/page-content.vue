<template>
  <div class="page-content">
    <h-table
      :list-data="userList"
      :list-count="dataCount"
      v-bind="contentTableConfig"
      v-model:page="pageInfo"
      @selection-change="handleSelectionChange"
    >
      <template #headerHandler>
        <el-button type="primary" v-if="isCreate">新建用户</el-button>
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

      <template v-for="item in otherPropSlots" :key="item.prop" #[item.slotName]="scope">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scope.row" />
        </template>
      </template>
    </h-table>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, defineProps, defineExpose } from 'vue'
import { useStore } from '@/store'
import { usePermission } from '@/hooks/userPermission'

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

const isCreate = usePermission(props.pageName, 'create')

const pageInfo = ref({ currentPage: 1, pageSize: 10 })

watch(pageInfo, () => getPageData())

const getPageData = (queryInfo: any = {}) => {
  store.dispatch('system/getPageListAction', {
    pageName: props.pageName,
    queryInfo: {
      offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
      size: pageInfo.value.pageSize,
      ...queryInfo
    }
  })
}
getPageData()

const userList = computed(() => store.getters['system/pageListData'](props.pageName))
const dataCount = computed(() => store.getters['system/pageListCount'](props.pageName))

const handleSelectionChange = (value: any) => {
  console.log(value)
}

const otherPropSlots = props.contentTableConfig.propList.filter((item: any) => {
  if (item.slotName === 'enable') return false
  if (item.slotName === 'createAt') return false
  if (item.slotName === 'updateAt') return false
  if (item.slotName === 'handle') return false
  return true
})

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
