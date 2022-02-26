<template>
  <div class="menu">
    <page-content :content-table-config="contentTableConfig" page-name="menu" />
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/page-content'

import { contentTableConfig } from './config/content-config'
</script>
