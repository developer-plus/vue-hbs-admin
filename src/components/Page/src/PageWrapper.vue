<template>
  <div>
    <a-page-header v-if="title" class="!bg-white border-t border-gray-500/20" :title="title">
      <template v-if="content">
        {{ content }}
      </template>
    </a-page-header>

    <div class="p-16px">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  content?: string
}

defineProps<Props>()
</script>
