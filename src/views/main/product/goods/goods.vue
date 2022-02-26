<template>
  <div class="goods">
    <page-search
      :search-form-config="searchFormConfig"
      @handle-reset-click="handleResetClick"
      @handle-query-click="handleQueryClick"
    />
    <page-content :content-table-config="contentTableConfig" page-name="goods" ref="pageContentRef">
      <template #image="scoped">
        <el-image style="width: 60px; height: 60px" :src="scoped.row.imgUrl" :preview-src-list="[scoped.row.imgUrl]" />
      </template>

      <template #oldPrice="scoped"> ¥{{ scoped.row.oldPrice }} </template>
      <template #newPrice="scoped"> ¥{{ scoped.row.newPrice }} </template>
    </page-content>
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
