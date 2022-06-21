import { createRouter, createWebHashHistory } from 'vue-router'
// 自动配置路由
import routes from 'virtual:generated-pages'

// 创建 Vue Router 实例
const router = createRouter({
  // 使用 Hash 模式
  history: createWebHashHistory(),
  routes: routes,
})

export default router
