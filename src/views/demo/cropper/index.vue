<template>
  <page-wrapper title="图片裁剪">
    <div class="flex">
      <Cropper :src="img" style="width: 40vw;" @cropend="handleCropend" />
      <div class="ml-50px">
        <img :src="cropperImg">
      </div>
    </div>
  </page-wrapper>
</template>

<script setup lang="ts">
import { PageWrapper } from '~/components/Page'
import type { CropendResult } from '~/components/Cropper'
import { Cropper } from '~/components/Cropper'
import img from '~/assets/images/test.jpeg'

const info = ref({})
const cropperImg = ref('')

function handleCropend({ imgBase64, imgInfo }: CropendResult) {
  info.value = imgInfo
  cropperImg.value = imgBase64
}
</script>
