import type { App } from 'vue'

import { ElButton, ElInput, ElRadio, ElAlert } from 'element-plus'

const components = [ElButton, ElButton, ElInput, ElRadio, ElAlert]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
