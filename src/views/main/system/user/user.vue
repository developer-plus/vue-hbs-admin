<template>
  <div class="user">
    <page-search
      :search-form-config="searchFormConfig"
      @handle-reset-click="handleResetClick"
      @handle-query-click="handleQueryClick"
    />
    <page-content :content-table-config="contentTableConfig" page-name="users" ref="pageContentRef" />
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { searchFormConfig } from './config/search-config'
import { contentTableConfig } from './config/content-config'

import { usePageSearch } from '@/hooks/usePageSearch'

const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
</script>
