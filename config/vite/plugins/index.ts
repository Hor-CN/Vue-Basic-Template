/**
 * @name createVitePlugins
 * @Param isBuild
 * @description 封装plugins数组统一调用
 */
import { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { AutoImportDeps } from './autoImport'
import { ConfigPagesPlugin } from './pages'
import { UnocssPlugin } from './unocss'

export function createVitePlugins(isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // vue 支持
    vue(),
    // JSX 支持
    vueJsx(),
  ]

  // 自动按需引入依赖
  vitePlugins.push(AutoImportDeps())

  // 自动生成路由
  vitePlugins.push(ConfigPagesPlugin())

  // 原子化Css UnoCss
  vitePlugins.push(UnocssPlugin())

  // 开启.gz压缩  rollup-plugin-gzip
  vitePlugins.push(ConfigCompressPlugin())

  return vitePlugins
}
