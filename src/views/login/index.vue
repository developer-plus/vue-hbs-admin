<template>
  <div class="hbs-login h-full">
    <Plum />

    <div class="flex h-full">
      <div class="flex-1">
        left
      </div>
      <div class="flex-1 flex justify-center items-center">
        <a-form
          :model="formState"
          name="basic"
          :label-col="{ span: 8 }"
          :wrapper-col="{ span: 16 }"
          autocomplete="off"
          @finish="onFinish"
          @finish-failed="onFinishFailed"
        >
          <a-form-item
            label="Username"
            name="username"
            :rules="[{ required: true, message: 'Please input your username!' }]"
          >
            <a-input v-model:value="formState.username" />
          </a-form-item>

          <a-form-item
            label="Password"
            name="password"
            :rules="[{ required: true, message: 'Please input your password!' }]"
          >
            <a-input-password v-model:value="formState.password" />
          </a-form-item>

          <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
            <a-checkbox v-model:checked="formState.remember">
              Remember me
            </a-checkbox>
          </a-form-item>

          <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
            <a-button type="primary" html-type="submit">
              Submit
            </a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface FormState {
  username: string
  password: string
  remember: boolean
}

const formState = reactive<FormState>({
  username: 'Hongbusi',
  password: 'Hongbusi',
  remember: true
})
const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
</script>

<style scoped lang="less">
.hbs-login::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-left: -48%;
  background-image: url(/src/assets/svg/login-bg.svg);
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: auto 100%;
  content: '';
}
</style>
