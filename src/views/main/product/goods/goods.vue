<template>
  <div class="goods">
    <page-content :content-table-config="contentTableConfig" page-name="goods">
      <template #image="scoped">
        <el-image style="width: 60px; height: 60px" :src="scoped.row.imgUrl" :preview-src-list="[scoped.row.imgUrl]" />
      </template>

      <template #oldPrice="scoped"> ¥{{ scoped.row.oldPrice }} </template>
      <template #newPrice="scoped"> ¥{{ scoped.row.newPrice }} </template>
    </page-content>
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/page-content'

import { contentTableConfig } from './config/content-config'
</script>
