<template>
  <div class="user">
    <page-search :search-form-config="searchFormConfig" />
    <div class="content"></div>
  </div>
</template>

<script setup lang="ts">
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search-config'
</script>
