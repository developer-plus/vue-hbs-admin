<template>
  <a-card title="项目信息" :bordered="false">
    <a-descriptions bordered>
      <a-descriptions-item label="版本">
        {{ version }}
      </a-descriptions-item>
      <a-descriptions-item label="最后编译时间">
        {{ lastBuildTime }}
      </a-descriptions-item>
      <a-descriptions-item label="Github">
        <a href="https://github.com/Hongbusi/vue-hbs-admin" target="_blank">Github</a>
      </a-descriptions-item>
      <a-descriptions-item label="预览地址">
        <a href="https://hongbusi.github.io/vue-hbs-admin" target="_blank">预览地址</a>
      </a-descriptions-item>
    </a-descriptions>
  </a-card>
</template>

<script setup lang="ts">
const { pkg, lastBuildTime } = __APP_INFO__
const { version } = pkg
</script>
