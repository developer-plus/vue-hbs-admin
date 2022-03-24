<template>
  <div>
    {{ lastBuildTime }}
  </div>
</template>

<script setup lang="ts">
const { pkg, lastBuildTime } = __APP_INFO__
const { dependencies, devDependencies, name, version } = pkg
</script>
