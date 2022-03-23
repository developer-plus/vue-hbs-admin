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
    [/^enter-([xy])-([lr])-([1-9])/, ([, direction, star, index]) => {
      return {
        'transform': `translate${direction.toUpperCase()}(${star === 'l' ? '-50px' : '50px'})`,
        'z-index': `${10 - index}`,
        'opacity': '0',
        'animation': `enter-${direction}-animation 0.4s ease-in-out 0.3s`,
        'animation-fill-mode': 'forwards',
        'animation-delay': `${(index * 1) / 10}s`
      }
    }]
  ]
})
