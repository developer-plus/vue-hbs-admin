<template>
  <div class="h-table">
    <el-table :data="listData" border style="width: 100%">
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center" />
      </template>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  listData: {
    type: Array,
    required: true
  },
  propList: {
    type: Array,
    required: true
  }
})
</script>
