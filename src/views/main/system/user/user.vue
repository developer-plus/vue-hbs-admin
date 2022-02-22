<template>
  <div class="user">
    <page-search :search-form-config="searchFormConfig" />
    <div class="content"></div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/store'

import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search-config'

const store = useStore()
store.dispatch('system/getPageListAction', {
  pageUrl: '/users/list',
  queryInfo: {
    offset: 0
  }
})
</script>
