<template>
  <div class="page-search">
    <h-form v-bind="searchFormConfig" v-model="formData">
      <template #footer>
        <div class="handle-btns">
          <el-button :icon="Refresh" @click="handleResetClick">重置</el-button>
          <el-button type="primary" :icon="Search" @click="handleQueryClick">搜索</el-button>
        </div>
      </template>
    </h-form>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'

import { Search, Refresh } from '@element-plus/icons-vue'
import HForm from '@/base-ui/form'

const props = defineProps({
  searchFormConfig: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['handle-reset-click', 'handle-query-click'])

// 双向绑定的属性应该是由配置文件的 field 来决定
// 1. 优化一：formData 中的属性应该动态来决定
const formItems = props.searchFormConfig?.formItems ?? []
const formOriginData: any = {}
for (const item of formItems) {
  formOriginData[item.field] = ''
}

const formData = ref(formOriginData)

// 2. 优化二：当用户点击重置
const handleResetClick = () => {
  for (const key in formOriginData) {
    formData.value[key] = formOriginData[key]
  }
  emit('handle-reset-click')
}

// 3. 优化三：当用户点击搜索
const handleQueryClick = () => {
  emit('handle-query-click', formData.value)
}
</script>

<style scoped lang="less">
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
