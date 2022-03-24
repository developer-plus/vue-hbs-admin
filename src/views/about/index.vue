<template>
  <div>
    <template v-for="(item, index) in info" :key="index">
      <a-descriptions :title="item.title" bordered>
        <template v-for="(value, key) in item.data" :key="key">
          <a-descriptions-item :label="key">
            {{ value }}
          </a-descriptions-item>
        </template>
      </a-descriptions>
    </template>
  </div>
</template>

<script setup lang="ts">
const { pkg, lastBuildTime } = __APP_INFO__
const { dependencies, devDependencies, name, version } = pkg

const info = [
  {
    title: '项目信息',
    data: {
      版本: version,
      最后编译时间: lastBuildTime,
      预览地址: '预览地址',
      Github: 'Github'
    }
  },
  {
    title: '生产环境依赖',
    data: dependencies
  },
  {
    title: '开发环境依赖',
    data: devDependencies
  }
]
</script>
