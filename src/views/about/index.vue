<template>
  <div>
    <template v-for="(item, index) in info" :key="index">
      <a-card :title="item.title" :bordered="false" class="enter-y mt-16px">
        <a-descriptions bordered>
          <template v-for="(value, key) in item.data" :key="key">
            <a-descriptions-item :label="key">
              {{ value }}
            </a-descriptions-item>
          </template>
        </a-descriptions>
      </a-card>
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
      预览地址: 'https://hongbusi.github.io/vue-hbs-admin',
      Github: 'https://github.com/Hongbusi/vue-hbs-admin'
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

<style scoped lang="less">
.ant-card:nth-child(2) {
  @apply my-16px;
}
</style>
