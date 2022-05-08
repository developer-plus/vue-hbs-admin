<script lang="ts" setup>
import type { WatchStopHandle } from 'vue'
import { message } from 'ant-design-vue'
import TickFormProps from './props'
import { noop } from '~/utils/index'
import { logError, logWarning } from '~/utils/log'
import { isArray } from '~/utils/is'
import IframeVue from '~/components/Iframe/src/Iframe.vue'
// todo 信息提示
// <->

// component props
const props = defineProps(TickFormProps)
const options = toRef(props, 'options')

// component state
const data = reactive<{ value: TickFormData[] }>({
  value: []
})

const _value = computed(() => {
  return generatorParams('role')
})

const formRules = ref<any>({})
// RefDom | RefComponent
const dataForm = ref<any>(null)

// stopEffect
const stopWatchr: any[] = []

// component var
const axiosOptionsMap = new Map<string, TickFormData>()
const noOptionsType = ['Input', 'InputNum', 'Picker', 'Time', 'Switch', 'Img']

onMounted(() => {
  if (axiosOptionsMap.size > 0) {
    axiosOptionsMap.forEach(async(value) => {
      const proxy = value
      if (proxy.axiosOptions) {
        const res = await proxy.axiosOptions()
        setProxyOptions(proxy, res)
      }
      if (proxy.defaultValue) {
        setProxyDefaultValue(proxy)
      }
      closeComponentLoading(proxy)
      axiosOptionsMap.delete(proxy.key)
    })
  }
})

function setProxyOptions(proxy: TickFormData, value: any[]) {
  proxy.options = value
}
function setProxyDefaultValue(proxy: TickFormData) {
  proxy.value = proxy.defaultValue || null
}

function initRules() {
  for (let i = 0; i < data.value.length; i++) {
    const it = data.value[i]
    let rule: any
    const { rules, ant, message, label, required, trigger, valueType, antValidator, name, key } = it
    if (!rules) {
      rule = {
        required: !!(ant || required),
        trigger: trigger || ['blur'],
        type: valueType || 'string',
        validator: antValidator,
        message: message || `${label}不可为空`
      }
    }
    else {
      rule = rules
    }
    if (rule.validator) {
      delete rule.validator
    }
    const ruleKey = (key || name) as string
    formRules.value[ruleKey] = rule
  }
}
function initializeTheCenter() {
  if (!options.value) {
    return
  }
  for (const iterator of options.value) {
    mixinData(iterator)
  }
  initRules()
  initWatch()
}
initializeTheCenter()

function initWatch() {
  data.value.forEach((item) => {
    if (!item.watchKey || !item.watchCallBack) {
      if (item.watchKey || item.watchKey) {
        logError('请让watchKey和watchCallBack 一同食用')
      }
      return
    }

    const keyArr = isArray(item.watchKey) ? item.watchKey : [item.watchKey]

    const collectTheKeyFunction: (() => any)[] = []

    const params = keyArr
      .map((key) => {
        const proxy = data.value.find(it => it.key === key)
        if (proxy) {
          injectionToMonitorAnArrayElement(proxy)
        }
        else {
          logWarning(`你输入的key=${key}不再存在于你传入的表单配置中`)
        }
        return proxy
      })
      .filter(item => !!item) as TickFormData[]

    if (params.length === 0) {
      logWarning(`您在${item.label}---${item.key}中传入${JSON.stringify(item.watchKey)}全部无效`)
      return
    }

    function injectionToMonitorAnArrayElement(proxy: TickFormData) {
      collectTheKeyFunction.push(() => proxy?.value)
    }

    const stopWatch = watch(collectTheKeyFunction, async(newValue) => {
      openComponentLoading(item)
      const res = item.watchCallBack && (await item.watchCallBack(params, newValue, item))
      if (item._isWatchUpdate) {
        item.value = null
      }
      else {
        item._isWatchUpdate = true
      }
      item.options = res as any[]
      // todo initRules()
      closeComponentLoading(item)
    })
    stopWatchr.push(stopWatch)
  })
}
function openComponentLoading(proxy: TickFormData) {
  proxy._loading = true
}
function closeComponentLoading(proxy: TickFormData) {
  proxy._loading = false
}
function mixinData(iterator: TickFormItem) {
  let _isWatchUpdate = true
  if (iterator.defaultValue) {
    _isWatchUpdate = false
  }
  const dataItem = {
    ant: false,
    value: null,
    options: [],
    _loading: true,
    _isWatchUpdate,
    ...iterator
  }
  const ProxyLength = data.value.push(dataItem)

  const proxy = data.value[ProxyLength - 1]
  if (iterator.axiosOptions) {
    axiosOptionsMap.set(proxy.key, proxy)
  }
}

function generatorParams(type = 'create') {
  if (!data.value) return
  return data.value.reduce((pre: any, cur: TickFormData) => {
    if (type === 'create') {
      if (cur.reconfiguration && cur.value !== null) {
        cur.reconfiguration(cur.value).forEach((item) => {
          pre[item.key] = item.value
        })
      }
      else {
        pre[cur.key] = cur.value
      }
    }
    else if (type === 'role') {
      pre[cur.key] = cur.value
    }

    return pre
  }, {})
}

async function update(it: any) {
  Object.keys(it).forEach((key) => {
    const targetProxy = findTargetProxy(key)
    if (!targetProxy) {
      return
    }

    if (targetProxy._watch) {
      targetProxy._watch()
    }

    const value = targetProxy.update ? targetProxy.update(it) : it[key] ? it[key] : null
    const isTargetProxyHas = noOptionsType.indexOf(targetProxy.type) === -1

    let stopWatch: WatchStopHandle = noop
    if (targetProxy.options.length === 0 && isTargetProxyHas) {
      stopWatch = watch(
        () => targetProxy.options,
        () => {
          targetProxy.value = value
          stopWatch()
        },
        { deep: true }
      )
    }
    else {
      targetProxy.value = value
    }

    targetProxy._watch = stopWatch
  })
}

function findTargetProxy(key: string) {
  const targetProxy = data.value.find((it) => {
    const currentKey = it.proxyKey ? it.proxyKey : it.key
    if (isArray(currentKey)) {
      return currentKey.some(value => value === key)
    }
    else {
      return currentKey === key
    }
  }) as TickFormData

  return targetProxy
}

/**
 * @description: 重置表单（清空表单）
 */
function reset() {
  if (!data.value) return
  data.value.forEach((it: TickFormData) => {
    if (it.reset) {
      it.value = it.reset(it)
    }
    else {
      (it.value as any) = null
    }
  })
}

/**
 * @description: 使用naive自带的校验模式
 * @param {Function} callBack 成功后的回调函数
 */
function antValidator(callBack: Function) {
  if (dataForm.value) {
    dataForm.value.validate().then((_: any) => {
      callBack()
    })
  }
}

/**
 * @description: 开启表单验证
 * @return {boolean}
 */
function validator() {
  if (!data.value) return
  return data.value.every((it: TickFormData) => {
    if (it.validator) {
      return it.validator()
    }
    if (it.required) {
      if (it.value) {
        return true
      }
      // todo  信息提示
      message.warning(it.message || `请按照要求填写${it.label}`)
      return false
    }
    return true
  })
}

onUnmounted(() => {
  // 取消effect的缓存
  if (stopWatchr.length > 0) {
    stopWatchr.forEach((stop) => {
      stop()
    })
  }
})

defineExpose({
  generatorParams,
  update,
  reset,
  antValidator,
  validator,
  _value
})
</script>

<template>
  <a-form v-bind="props.formConfig" ref="dataForm" :model="_value" :rules="formRules">
    <template v-for="item in data.value" :key="item.key">
      <a-form-item :label="item.label" :rules="item.rules" :name="item.name || item.key">
        <template v-if="item.type === 'Input'">
          <a-input v-model:value="item.value" v-bind="item.cops" />
        </template>
        <template v-if="item.type === 'InputNumber'">
          <a-input-number v-model:value="item.value" v-bind="item.cops" />
        </template>
        <template v-if="item.type === 'Select'">
          <a-select v-model:value="item.value" v-bind="item.cops" :loading="item._loading">
            <a-select-option v-for="childItem in item.options" :key="childItem.value">
              {{ childItem.label }}
            </a-select-option>
          </a-select>
        </template>
      </a-form-item>
    </template>
  </a-form>
</template>

<style lang="scss" scoped></style>
