<template>
  <div class="test">
    <div ref="divRef">test</div>
    <my-component ref="componentRef" />
    <button @click="handleClick">click me</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import MyComponent from './MyComponent.vue'

const divRef = ref(null)
const componentRef = ref(null)

const handleClick = () => {
  console.log(divRef.value) // <div>test</div>
  console.log(componentRef.value) // Proxy { __v_skip: true }
}
</script>
