<template>
  <div class="user">
    <div class="search">
      <h-form v-bind="searchFormConfig" />
    </div>
    <div class="content"></div>
  </div>
</template>

<script setup lang="ts">
import HForm from '@/base-ui/form'

import { searchFormConfig } from './config/search-config'
</script>
