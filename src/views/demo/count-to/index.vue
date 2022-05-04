<template>
  <page-wrapper title="数字动画">
    <a-card title="数字动画（自动）" class="enter-y">
      <a-space>
        <a-button @click="endVal += 1000">
          +1000
        </a-button>
        <a-button @click="endVal -= 1000">
          -1000
        </a-button>
      </a-space>
      <div class="mt-20px">
        <a-card-grid style="width: 50%; text-align: center">
          <count-to :start-val="startVal" :end-val="endVal" prefix="$" />
        </a-card-grid>
        <a-card-grid style="width: 50%; text-align: center">
          <count-to
            :start-val="startVal"
            :end-val="endVal"
            suffix="元"
            color="red"
          />
        </a-card-grid>
      </div>
    </a-card>
    <a-card title="数字动画（手动）" class="enter-y !mt-16px">
      <a-space>
        <a-button @click="countToRef.start()">
          开始
        </a-button>
        <a-button @click="countToRef.reset()">
          重置
        </a-button>
      </a-space>
      <div class="mt-20px">
        <a-card-grid style="width: 100%; text-align: center">
          <count-to
            ref="countToRef"
            :start-val="startVal"
            :end-val="endVal"
            :autoplay="false"
            suffix="元"
            color="red"
          />
        </a-card-grid>
      </div>
    </a-card>
  </page-wrapper>
</template>

<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { PageWrapper } from '~/components/Page'
import type { Props } from '~/components/CountTo'
import { CountTo } from '~/components/CountTo'

const startVal = ref(0)
const endVal = ref(6666)

const countToRef = ref<InstanceType<typeof Props> | null>(null)

</script>
