# useWatermark 函数

## 使用说明

```ts
// 引入
import { useWatermark } from "~/components/Watermark";

const { setWatermark, clear } = useWatermark();


// 默认设置，不传参数，就按照默认
const options = {
  str: '防伪 ☆ 加密', // 默认值
  str2: '',
  font: '15px Vedana',
  fillStyle: 'rgba(0, 0, 0, 0.3)',
  textAlign: 'center',
  textBaseline: 'middle',
}

// 创建水印
setWatermark(options)
// 清除水印
clear()
```
