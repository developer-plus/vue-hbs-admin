<template>
  <a-breadcrumb>
    <a-breadcrumb-item v-for="(item,index) in routes" :key="index">
      {{ item.meta.title }}
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script setup lang="ts">

const route = useRoute()
const router = useRouter()
const routes = ref(route.matched)

router.afterEach((to) => {
  routes.value = to.matched
})

</script>
