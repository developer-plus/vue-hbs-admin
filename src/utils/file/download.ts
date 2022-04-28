
export function downloadDatafile(data: BlobPart, filename: string, mine?: string) {
  const blob = new Blob([data], { type: mine || ' image/jpeg' })
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.style.display = 'none'
  link.href = url
  link.download = filename
  link.target = '_blank'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  window.URL.revokeObjectURL(url)
}
