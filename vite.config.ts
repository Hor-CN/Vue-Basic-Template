import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import { presetUno, presetAttributify, presetIcons } from 'unocss'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
        // 默认预设 现在它等效于@unocss/preset-wind : Tailwind / Windi CSS compact preset
        presetUno(),
        // 属性化模式支持
        presetAttributify(),
        // icon支持
        presetIcons(),
      ],
    }),
    // 自动导入
    AutoImport({
      imports: ['vue'],
      dts: 'types/auto-import.d.ts',
      eslintrc: {
        enabled: true,
      },
    }),
    Pages({
      dirs: 'src/views',
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '/@/': path.resolve(__dirname, 'src'),
      '/#/': path.resolve(__dirname, 'types'),
    },
  },
})
