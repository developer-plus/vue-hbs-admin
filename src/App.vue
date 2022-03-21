<template>
  <router-view />
</template>

<script setup lang="ts">
import { accountLoginRequest } from './api/login'

accountLoginRequest({ name: 'Hongbusi', password: 'admin' }).then((res) => {
  console.log(res)
})
</script>
