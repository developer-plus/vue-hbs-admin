<template>
  <a-card title="数字动画">
    <a-space>
      <a-button @click="endVal += 1000">
        +1000
      </a-button>
      <a-button @click="endVal -= 1000">
        -1000
      </a-button>
    </a-space>

    <div>
      <a-card-grid style="width: 25%; text-align: center">
        <count-to :start-val="startVal" :end-val="endVal" />
      </a-card-grid>
    </div>
  </a-card>
</template>

<script setup lang="ts">
import { CountTo } from '~/components/CountTo'

const startVal = ref(0)
const endVal = ref(6666)
</script>
