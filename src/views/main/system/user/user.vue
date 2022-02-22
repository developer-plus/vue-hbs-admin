<template>
  <div class="user">
    <div class="search">
      <h-form v-bind="searchFormConfig" v-model="formData" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import HForm from '@/base-ui/form'
import { searchFormConfig } from './config/search-config'

const formData = ref({
  id: '',
  name: '',
  password: '',
  sport: '',
  createTime: ''
})
</script>
