<template>
  <div class="strength-meter relative">
    <a-input-password
      v-if="showInput"
      v-bind="$attrs"
      allow-clear
      :value="innerValueRef"
      :disabled="disabled"
      @change="handleChange"
    >
      <template v-for="item in Object.keys($slots)" #[item]="data">
        <slot :name="item" v-bind="data || {}" />
      </template>
    </a-input-password>
    <div class="strength-meter-bar">
      <div class="strength-meter-bar--fill" :data-score="getPasswordStrength" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { zxcvbn } from '@zxcvbn-ts/core'

const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  showInput: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['score-change', 'change'])

const innerValueRef = ref('')

const getPasswordStrength = computed(() => {
  const { disabled } = props
  if (disabled) return -1
  const innerValue = unref(innerValueRef)
  const score = innerValue ? zxcvbn(unref(innerValueRef)).score : -1
  emit('score-change', score)
  return score
})

function handleChange(e: ChangeEvent) {
  innerValueRef.value = e.target.value
}

watchEffect(() => {
  innerValueRef.value = props.value || ''
})

watch(
  () => unref(innerValueRef),
  (val) => {
    emit('change', val)
  }
)
</script>

<style scoped lang="less">
@disabled-color: #00000040;
@error-color: #ed6f6f;
@warning-color: #efbd47;
@success-color: #55d187;

.strength-meter {
  &-bar {
    position: relative;
    height: 6px;
    margin: 10px auto 6px;
    background-color: @disabled-color;
    border-radius: 6px;

    &::before,
    &::after {
      position: absolute;
      z-index: 10;
      display: block;
      width: 20%;
      height: inherit;
      background-color: transparent;
      border-color: #fff;
      border-style: solid;
      border-width: 0 5px;
      content: '';
    }

    &::before {
      left: 20%;
    }

    &::after {
      right: 20%;
    }

    &--fill {
      position: absolute;
      width: 0;
      height: inherit;
      background-color: transparent;
      border-radius: inherit;
      transition: width 0.5s ease-in-out, background 0.25s;

      &[data-score='0'] {
        width: 20%;
        background-color: darken(@error-color, 10%);
      }

      &[data-score='1'] {
        width: 40%;
        background-color: @error-color;
      }

      &[data-score='2'] {
        width: 60%;
        background-color: @warning-color;
      }

      &[data-score='3'] {
        width: 80%;
        background-color: fade(@success-color, 50%);
      }

      &[data-score='4'] {
        width: 100%;
        background-color: @success-color;
      }
    }
  }
}
</style>
