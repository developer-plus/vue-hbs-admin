<template>
  <template v-if="getShow">
    <div>
      <!-- <Qrcode
        :value="qrCodeUrl"
        class="enter-x flex justify-center"
        :width="400"
      /> -->

      <img class="enter-x" :src="qrCodeUrl" alt="">

      <a-divider class="enter-x">
        扫码后点击"确认"，即可完成登录
      </a-divider>

      <a-button size="large" block class="mt-4 enter-x" @click="handleBackLogin">
        返回
      </a-button>
    </div>
  </template>
</template>
<script lang="ts" setup>
import { useLoginState, LoginStateEnum } from '../useLogin'

import qrCodeUrl from '~/assets/images/qrcode.png'

// import { Qrcode } from '~/components/Qrcode'

const { handleBackLogin, getLoginState } = useLoginState()

const getShow = computed(() => unref(getLoginState) === LoginStateEnum.QR_CODE)
</script>
