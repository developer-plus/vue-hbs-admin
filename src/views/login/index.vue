<template>
  <div class="hbs-login h-full">
    <div class="min-w-1280 mx-auto h-full py-2 px-10 flex">
      <div class="flex-1 border">
        left
      </div>
      <div class="flex-1 border">
        right
      </div>
    </div>
  </div>
</template>

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
