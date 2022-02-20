<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <component :is="isCollapse ? Fold : Expand" />
    </el-icon>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { Fold, Expand } from '@element-plus/icons-vue'

defineProps({
  isCollapse: Boolean
})

const emit = defineEmits(['foldChange'])

const handleFoldClick = () => {
  emit('foldChange')
}
</script>

<style scoped lang="less">
.nav-header {
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
}
</style>
