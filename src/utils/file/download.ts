import { download, dataURLtoBlob, urlToBase64 } from './tool'
import { IsIE } from '~/utils/userAgent'
export function downloadDatafile(data: BlobPart, filename: string, mine?: string) {
  const blob = new Blob([data], { type: mine || ' image/jpeg' })
  const url = window.URL.createObjectURL(blob)
  download(url, filename, () => {
    window.URL.revokeObjectURL(url)
  })
}

export function downloadBase64(data: string, filename: string) {
  const blob = dataURLtoBlob(data)
  const url = window.URL.createObjectURL(blob)
  download(url, filename, () => {
    window.URL.revokeObjectURL(url)
  })
}

export function downloadUrlimg(url: string, filename: string, mine?: string) {
  urlToBase64(url, mine).then((base64) => {
    downloadBase64(base64, filename)
  })
}

export function downloadAdress({ url, target = '_blank', filename = '文件地址下载' }: { url: string; target?: TargetContext; filename?: string }) {
  if (IsIE() && IsIE() < '9.0') {
    window.open(url, target)
  }
  else {
    download(url, filename)
  }
}
