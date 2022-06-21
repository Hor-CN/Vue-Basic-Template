/**
 * @name UnocssPlugin
 * @description 原子化Css
 */
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'

export const UnocssPlugin = () => {
  return Unocss({
    presets: [
      // 默认预设 现在它等效于@unocss/preset-wind : Tailwind / Windi CSS compact preset
      presetUno(),
      // 属性化模式支持
      presetAttributify(),
      // icon支持
      presetIcons(),
    ],
  })
}
