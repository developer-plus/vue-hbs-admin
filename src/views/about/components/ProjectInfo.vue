<template>
  <a-card title="项目信息" :bordered="false">
    <a-descriptions bordered :column="2" size="small">
      <a-descriptions-item label="版本">
        <a-tag color="blue">
          {{ version }}
        </a-tag>
      </a-descriptions-item>
      <a-descriptions-item label="最后编译时间">
        <a-tag color="blue">
          {{ lastBuildTime }}
        </a-tag>
      </a-descriptions-item>
      <a-descriptions-item label="Github">
        <a href="https://github.com/developer-plus/vue-hbs-admin" target="_blank">Github</a>
      </a-descriptions-item>
      <a-descriptions-item label="预览地址">
        <a href="https://vue-hbs-admin.netlify.app" target="_blank">预览地址</a>
      </a-descriptions-item>
    </a-descriptions>
  </a-card>
</template>

<script setup lang="ts">
const { pkg, lastBuildTime } = __APP_INFO__
const { version } = pkg
</script>
