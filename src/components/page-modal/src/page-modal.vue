<template>
  <div class="page-modal">
    <el-dialog v-model="dialogVisible" title="新建用户" width="30%" center>
      <h-form v-bind="modalConfig" v-model="formData" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineExpose } from 'vue'

import HForm from '@/base-ui/form'

const props = defineProps({
  modalConfig: {
    type: Object,
    required: true
  }
})

const dialogVisible = ref(false)
const formData = ref({})

defineExpose({
  dialogVisible
})
</script>
