<template>
  <div class="h-table">
    <el-table :data="listData" border style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column v-if="showSelectColumn" type="selection" width="60" align="center" />
      <el-table-column v-if="showIndexColumn" type="index" label="序号" width="80" align="center" />
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center">
          <template #default="scoped">
            <slot :name="propItem.slotName" :row="scoped.row">{{ scoped.row[propItem.prop] }}</slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineProps({
  listData: {
    type: Array,
    required: true
  },
  propList: {
    type: Array,
    required: true
  },
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  showSelectColumn: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['selection-change'])

const handleSelectionChange = (value: any) => {
  emit('selection-change', value)
}
</script>
