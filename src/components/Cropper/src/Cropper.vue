<template>
  <div :class="getClass" :style="getWrapperStyle">
    <img
      v-show="isReady"
      ref="imgElRef"
      :src="src"
      :alt="alt"
      :style="getImageStyle"
    >
  </div>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue'
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'

type Options = Cropper.Options

const defaultOptions: Options = {
  aspectRatio: 1, // 定义裁剪框的固定纵横比
  zoomable: true, // 缩放图像
  zoomOnTouch: true, // 通过拖动触摸来缩放图像
  zoomOnWheel: true, // 通过鼠标滚轮缩放图像
  cropBoxMovable: true, // 通过拖动来移动裁剪框
  cropBoxResizable: true, // 通过拖动来调整裁剪框的大小
  toggleDragModeOnDblclick: true, // 在裁剪器上单击两次时，启用以在“裁剪”和“移动”之间切换拖动模式
  autoCrop: true, // 在初始化时自动裁剪图像
  background: true, // 显示容器的网格背景
  highlight: true, // 在裁剪框上方显示白色模态
  center: true, // 在裁剪框上方显示中心指示器
  responsive: true, // 调整窗口大小时重新渲染裁剪器
  restore: true, // 调整窗口大小后恢复裁剪区域
  checkCrossOrigin: true, // 检查当前图像是否为跨域图像
  checkOrientation: true, // 检查当前图像的 Exif 方向信息
  scalable: true, // 缩放图像
  modal: true, // 在图像上方和裁剪框下方显示黑色模态
  guides: true, // 在裁剪框上方显示虚线
  movable: true, // 移动图像
  rotatable: true // 旋转图像
}

interface Props {
  src: string // 图片源
  alt?: string // 图片 alt
  circled?: boolean // 圆形裁剪框
  realTimePreview?: boolean // 实时触发预览
  height?: string // 高度
  imageStyle?: CSSProperties // 图片样式
  options?: Options // corpperjs 配置项
}

const props = withDefaults(defineProps<Props>(), {
  circled: false,
  realTimePreview: true,
  height: '360px',
  imageStyle: () => ({}),
  options: () => ({})
})

const emit = defineEmits(['ready', 'cropend', 'error'])

const imgElRef = ref<HTMLImageElement>()
const cropper = ref<Nullable<Cropper>>()
const isReady = ref(false)

const debounceRealTimeCroppered = useDebounceFn(realTimeCroppered, 80)

const getImageStyle = computed((): CSSProperties => {
  return {
    height: props.height,
    maxWidth: '100%',
    ...props.imageStyle
  }
})

const getClass = computed(() => {
  return [
    'hbs-cropper',
    {
      'hbs-cropper--circled': props.circled
    }
  ]
})

const getWrapperStyle = computed((): CSSProperties => {
  return { height: `${`${props.height}`.replace(/px/, '')}px` }
})

onMounted(init)

onUnmounted(() => {
  cropper.value?.destroy()
})

async function init() {
  const imgEl = unref(imgElRef)
  if (!imgEl) {
    return
  }
  cropper.value = new Cropper(imgEl, {
    ...defaultOptions,
    ready: () => {
      isReady.value = true
      realTimeCroppered()
      emit('ready', cropper.value)
    },
    crop() {
      debounceRealTimeCroppered()
    },
    zoom() {
      debounceRealTimeCroppered()
    },
    cropmove() {
      debounceRealTimeCroppered()
    },
    ...props.options
  })
}

// 实时显示预览
function realTimeCroppered() {
  props.realTimePreview && croppered()
}

// 事件：裁剪后返回 base64 和宽高信息
function croppered() {
  if (!cropper.value) {
    return
  }
  const imgInfo = cropper.value.getData()
  const canvas = props.circled ? getRoundedCanvas() : cropper.value.getCroppedCanvas()
  canvas.toBlob((blob) => {
    if (!blob) {
      return
    }
    const fileReader: FileReader = new FileReader()
    fileReader.readAsDataURL(blob)
    fileReader.onloadend = (e) => {
      emit('cropend', {
        imgBase64: e.target?.result ?? '',
        imgInfo
      })
    }
    fileReader.onerror = () => {
      emit('error')
    }
  }, 'image/png')
}

// 获取圆形图片画布
function getRoundedCanvas() {
  const sourceCanvas = cropper.value!.getCroppedCanvas()
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')!
  const width = sourceCanvas.width
  const height = sourceCanvas.height
  canvas.width = width
  canvas.height = height
  context.imageSmoothingEnabled = true
  context.drawImage(sourceCanvas, 0, 0, width, height)
  context.globalCompositeOperation = 'destination-in'
  context.beginPath()
  context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true)
  context.fill()
  return canvas
}
</script>

<style lang="less">
.hbs-cropper {
  &--circled {
    .cropper-view-box,
    .cropper-face {
      border-radius: 50%;
    }
  }
}
</style>
