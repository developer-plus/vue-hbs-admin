<template>
  <div w-full h="60px" bg="white" pl="20px" mb="10px">
    <h1 text="2xl" font="bold" leading="60px">
      文件下载示例
    </h1>
  </div>
  <a-card title="文件流下载示例">
    <a-button type="primary" @click="handleDownloadData">
      下载
    </a-button>
  </a-card>
  <a-card title="文件地址下载示例">
    <a-button type="primary">
      下载
    </a-button>
  </a-card>
  <a-card title="base64下载示例">
    <a-button type="primary">
      下载
    </a-button>
  </a-card>
  <a-card title="图片URL下载示例">
    <a-button type="primary">
      下载
    </a-button>
  </a-card>
</template>

<script lang="ts" setup>
import { downloadDatafile } from '~/utils/file/download'

const handleDownloadData = () => {
  downloadDatafile('text content', 'testFile.txt')
}
</script>

<style>

</style>
