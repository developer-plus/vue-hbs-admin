export interface Attr {
  str?: string
  str2?: string
  font?: string
  fillStyle?: string
  width?: number
  height?: number
  textAlign?: CanvasTextAlign
  textBaseline?: CanvasTextBaseline
}

export interface StyleConfig {
  id: string
  'pointer-events': string
  top: string
  left: string
  width: string
  height: string
  background: string
  position: string
  'z-index': string
}
