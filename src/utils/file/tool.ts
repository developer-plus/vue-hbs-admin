/**
 * @description: downloadFile
 * @param url
 * @param filename
 * @param cb
 * @param target
 */

export function download(url: string, filename: string, cb?: () => void, target?: string) {
  const link = document.createElement('a')
  link.style.display = 'none'
  link.href = url
  link.download = filename
  link.target = target || '_blank'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  if (cb) cb()
}

/**
 * @description: base64 to blob
 * @param base64Buf
 */
export function dataURLtoBlob(base64Buf: string): Blob {
  const arr = base64Buf.split(',')
  const typeItem = arr[0]
  const mime = typeItem.match(/:(.*?);/)![1]
  const bstr = window.atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}

/**
 * img url to base64
 * @param url
 * @param mine
 */
export function urlToBase64(url: string, mine?: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let canvas = document.createElement('CANVAS') as Nullable<HTMLCanvasElement>
    const ctx = canvas!.getContext('2d')
    const img = new Image()
    img.crossOrigin = 'Annoymous'
    img.onload = function() {
      if (!canvas || !ctx) {
        return reject(new Error('transform error'))
      }
      canvas.height = img.height
      canvas.width = img.width
      ctx.drawImage(img, 0, 0)
      const dataURL = canvas.toDataURL(mine || 'image/png')
      canvas = null
      resolve(dataURL)
    }
    img.src = url
  })
}
