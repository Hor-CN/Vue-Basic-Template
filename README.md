<p align="center">
  <a href="#">
    <img alt="Vite Logo" width="180" src="./static-files/imgs/vite.svg">
  </a>
</p>

<p align="center">
    <img src="https://img.shields.io/badge/-Vue3-34495e?logo=vue.j" />
    <img src="https://img.shields.io/badge/-Vite2.9.12-646cff?logo=vite&logoColor=white" />
    <img src="https://img.shields.io/badge/-TypeScript-blue?logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/-Pinia-yellow?logo=picpay&logoColor=white" />
    <img src="https://img.shields.io/badge/-ESLint-4b32c3?logo=eslint&logoColor=white" />
    <img src="https://img.shields.io/badge/-yarn-F69220?logo=yarn&logoColor=white" />
    <img src="https://img.shields.io/badge/-Axios-008fc7?logo=axios.js&logoColor=white" />
    <img src="https://img.shields.io/badge/-Prettier-ef9421?logo=Prettier&logoColor=white" alt="Prettier" />
    <img src="https://img.shields.io/badge/-Less-1D365D?logo=less&logoColor=white" alt="Less" />
    <img src="https://img.shields.io/badge/-Unocss-888888" alt="Unocss" />
    <img src="https://img.shields.io/badge/-wind / Tailwind%20CSS-06B6D4?logo=Tailwind%20CSS&logoColor=white" alt="Taiwind">
</p>

### 前言

> 哈喽,大家好 我是 Hor 👨🏻‍💻。 从我最初接触 Vue3 版本到现在已经有一段时间了，每次开发一个项目都需要重复的搭建，所以为了方便就打算使用 Vite 搭建一套通用的开发脚手架模板 🤖

一个开箱即用，快速搭建大型应用的 Vue3 + Vite2 + TypeScript+...模板框架。集成了各类插件，并进行了模块化和按需加载的优化，可以放心使用。

### 环境

- 开发工具： Vscode 前端人必备写码神器 + Volar
- 浏览器： Edge 非常友好的浏览器( Chrome 内核， Win11 自带，好用) + Vue.js devtools 浏览器调试插件
- 技术栈：Vue3 + Vite + TypeScript + Less + Unocss + Mock + Vue Router + axios + Pinia
- 规范化：Eslint + Prettier + husky + lint-staged
- 包管理：Yarn

### 特点

- 🍐 集成多环境配置，dev、测试、生产环境
- 🔌 集成 Eslint + Prettier 支持 husky 和 lint-staged，大厂团队代码规范协作必备，轻松实现代码规范代码约束和格式化统一
- 🍉 集成 Mock 接口服务，可摆脱后端束缚独立开发
- 🍇 集成 unocss，antfu 大神开源的原子化 css 解决方案，非常轻量
- 🍍 集成 Pinia，Vuex 的替代方案，轻量、简单、易用（尤大已表示不会有 Vuex5，或者说 pinia 就是 Vuex5）
- 📦 集成 Vite 自动导入插件 unplugin-vue-components，解放双手，开发效率直接起飞
- 🤹 集成 unplugin-icons 插件，优雅使用 iconify 图标

## 目录结构

以下是系统的目录结构

```
├── config
│   ├── vite             // vite配置
│   ├── constant         // 系统常量
├── docs                 // 文档相关
├── mock                 // mock数据
├── src
│    ├── api             // api请求
│    ├── assets          // 静态文件
│    ├── components      // 业务通用组件
│    ├── views           // 业务页面
│    ├── router          // 路由文件
│    ├── store           // 状态管理
│    ├── utils           // 工具类
│    ├── App.vue         // vue模板入口
│    ├── main.ts         // vue模板js
├── types                // 类型定义
├── tsconfig.json        // ts配置
└── vite.config.ts       // vite全局配置
```

## 🪂 大厂协作-代码规范

🪁 目前多数大厂团队一般使用[husky](https://github.com/typicode/husky)和 [lint-staged](https://github.com/okonet/lint-staged) 来约束代码规范，

- 通过`pre-commit`实现 lint 检查、单元测试、代码格式化等。
- 结合 VsCode 编辑器（保存时自动执行格式化：editor.formatOnSave: true）
- 配合 Git hooks 钩子（commit 前或提交前执行：pre-commit => npm run lint:lint-staged）
- IDE 配置（`.editorconfig`）、ESLint 配置（`.eslintrc.js` 和 `.eslintignore`）、StyleLint 配置（`.stylelintrc` 和 `.stylelintignore`），详细请看对应的配置文件。

🔌 关闭代码规范  
将 `src/` 目录分别加入 `.eslintignore` 和 `.stylelintignore` 进行忽略即可。

## 💕 支持 JSX 语法

```json
{
    ...
    "@vitejs/plugin-vue-jsx": "^1.3.10"
    ...
}
```

## 🧩Vite 插件模块化

为了方便管理插件，将所有的`config`统一放入`config/vite/plugins`里面，未来还会有更多插件直接分文件夹管理十分干净。值得一提的是，`Fast-Vue3`增加了统一环境变量管理，来区分动态开启某些插件。

```typescript
// vite/plugins/index.ts
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
```

而`vite.config.ts`便干净多了

```typescript
import { createVitePlugins } from './config/vite/plugins'
...
return {
    resolve: {
      alias: [
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        },
      ],
    },
    // plugins
    plugins: createVitePlugins(isBuild)
}
...
```

## 📱 支持`Pinia` ,下一代`Vuex5`

创建文件`src/store/index.ts`

```typescript
// 支持模块化，配合plop可以通过命令行一键生成
import { createPinia } from 'pinia'
import { useAppStore } from './modules/app'
const pinia = createPinia()
export { useAppStore }
export default pinia
```

创建文件`src/store/modules/user/index.ts`

```typescript
import { defineStore } from 'pinia'
import piniaStore from '@/store'
export const useUserStore = defineStore(
  // 唯一ID
  'user',
  {
    state: () => ({}),
    getters: {},
    actions: {},
  }
)
```

## 🤖 支持 Plop 自动生成文件

⚙️ 代码文件自动生成，提供三种预设模板 pages,components,store，也可以根据自己需要设计更多自动生成脚本。一般后端同学惯用此形式，十分高效。
