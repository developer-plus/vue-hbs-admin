import type { App } from 'vue'

// element-plus v1+ 版本按需引入方式
// import registerElement from './register-element'

export function registerApp(app: App): void {
  // registerElement(app)
  console.log(app)
}
