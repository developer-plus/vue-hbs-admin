<template>
  <div class="user">
    <page-search
      :search-form-config="searchFormConfig"
      @handle-reset-click="handleResetClick"
      @handle-query-click="handleQueryClick"
    />
    <page-content :content-table-config="contentTableConfig" page-name="users" ref="pageContentRef" />
    <page-modal :modal-config="modalConfig" />
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import { searchFormConfig } from './config/search-config'
import { contentTableConfig } from './config/content-config'
import { modalConfig } from './config/modal-config'

import { usePageSearch } from '@/hooks/usePageSearch'

const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()
</script>
