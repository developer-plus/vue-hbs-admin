import type { App } from 'vue'

// element-plus v1+ 版本按需引入方式
// import registerElement from './register-element'
import registerProperties from './register-properties'

export function globalRegister(app: App): void {
  // app.use(registerElement)
  app.use(registerProperties)
}
