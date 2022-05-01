import type { Attr, StyleConfig } from './types'

export const initConfig: Required<Attr> = {
  width: 300,
  height: 240,
  font: '15px Vedana',
  textAlign: 'center',
  textBaseline: 'middle',
  fillStyle: 'rgba(0, 0, 0, 0.3)',
  str: '防伪 ☆ 加密',
  str2: ''
}

export const styleConfig: StyleConfig = reactive({
  'id': '',
  'pointer-events': 'none',
  'width': '0px',
  'height': '0px',
  'top': '0px',
  'left': '0px',
  'position': 'absolute',
  'z-index': '100000',
  'background': 'rgba(0, 0, 0, 0.5)'
})
