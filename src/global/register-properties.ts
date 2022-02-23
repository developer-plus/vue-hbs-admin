import { App } from 'vue'

import { formatUtcString } from '@/utils/date-format'

export default function (app: App): void {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}
