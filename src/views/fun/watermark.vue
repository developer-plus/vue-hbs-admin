<template>
  <div ref="watermarkRef">
    <a-card title="水印功能">
      <a-space>
        <a-button type="primary" @click="setWatermark()"> 创建默认 </a-button>
        <a-button
          type="primary"
          danger
          @click="
            setWatermark({
              str: 'vue-hbs-admin',
              str2: 'watermark',
              fillStyle: '#409EFF',
            })
          "
        >
          创建自定义
        </a-button>
        <a-button @click="clear"> 清除 </a-button>
      </a-space>
    </a-card>
  </div>
</template>

<script setup lang="ts">
// 支持创建、清除
// 支持全局、单模块
// 支持单行或者两行文本
// 支持定制颜色
// hook 模式
import { useWatermark } from "~/components/Watermark";

const { setWatermark, clear } = useWatermark();
</script>
