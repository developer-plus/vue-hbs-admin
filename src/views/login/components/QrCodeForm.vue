<template>
  <template v-if="getShow">
    <div>
      <Qrcode
        :value="qrCodeUrl"
        class="enter-x flex justify-center"
        :width="400"
      />

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

import Qrcode from '~/components/Qrcode/src/Qrcode.vue'

const qrCodeUrl = 'https://github.com/Hongbusi/vue-hbs-admin'

const { handleBackLogin, getLoginState } = useLoginState()

const getShow = computed(() => unref(getLoginState) === LoginStateEnum.QR_CODE)
</script>
