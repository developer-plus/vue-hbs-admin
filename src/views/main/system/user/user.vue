<template>
  <div class="user">
    <page-search :search-form-config="searchFormConfig" />
    <page-content :content-table-config="contentTableConfig" page-name="users" />
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { searchFormConfig } from './config/search-config'
import { contentTableConfig } from './config/content-config'
</script>
