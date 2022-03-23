import {
  defineConfig,
  presetUno,
  presetAttributify,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify()
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ],
  rules: [
    ['min-w-1280', { 'min-width': '1280px' }],
    [/^enter-(x|y)-([1-9])/, ([, d, index]) => {
      return {
        'transform': `translate${d.toUpperCase()}(50px)`,
        'z-index': `${10 - index}`,
        'opacity': '0',
        'animation': `enter-${d}-animation 0.4s ease-in-out 0.3s`,
        'animation-fill-mode': 'forwards',
        'animation-delay': `${(index * 1) / 10}s`
      }
    }],
    [/^-enter-(x|y)-([1-9])/, ([, d, index]) => {
      return {
        'transform': `translate${d.toUpperCase()}(-50px)`,
        'z-index': `${10 - index}`,
        'opacity': '0',
        'animation': `enter-${d}-animation 0.4s ease-in-out 0.3s`,
        'animation-fill-mode': 'forwards',
        'animation-delay': `${(index * 1) / 10}s`
      }
    }]
  ]
})
