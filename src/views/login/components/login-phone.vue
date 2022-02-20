<template>
  <el-form :model="phone">
    <el-form-item label="手机号" prop="num">
      <el-input v-model="phone.num"></el-input>
    </el-form-item>
    <el-form-item label="验证码" prop="code">
      <div class="get-code">
        <el-input v-model="phone.code"></el-input>
        <el-button class="get-btn" type="primary">获取验证码</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const phone = reactive({
  num: '',
  code: ''
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;

  .get-btn {
    margin-left: 10px;
  }
}
</style>
