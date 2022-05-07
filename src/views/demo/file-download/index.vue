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
  <a-card title="文件地址下载示例" style="margin-top:10px" @click="handleDownLoadAdress">
    <a-button type="primary">
      下载
    </a-button>
  </a-card>
  <a-card title="base64下载示例" style="margin-top:10px" @click="handleDownLoadBase64">
    <a-button type="primary">
      下载
    </a-button>
  </a-card>
  <a-card title="图片URL下载示例" style="margin-top:10px" @click="hanldeDownLoadUrlImg">
    <a-button type="primary">
      下载
    </a-button>
  </a-card>
</template>

<script lang="ts" setup>
import base64Url from './base64.js'
import { downloadDatafile, downloadBase64, downloadUrlimg, downloadAdress } from '~/utils/file/download'

const handleDownloadData = () => {
  downloadDatafile('text content', 'testFile.txt')
}

const handleDownLoadAdress = () => {
  downloadAdress({
    url: 'https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png'
  })
}

const handleDownLoadBase64 = () => {
  downloadBase64(base64Url, 'base64下载')
}

const hanldeDownLoadUrlImg = () => {
  downloadUrlimg('https://cdn.jsdelivr.net/gh/architectMymine/architectMymine.github.io@latest/static/cover/2022-02-22.jpg', 'url下载')
}
</script>
