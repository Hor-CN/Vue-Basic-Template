import { createRouter, createWebHashHistory } from 'vue-router'
// 自动配置路由
import routes from 'virtual:generated-pages'
// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 创建 Vue Router 实例
const router = createRouter({
  // 使用 Hash 模式
  history: createWebHashHistory(),
  routes: routes,
})

router.beforeEach(async (_to, _from, next) => {
  NProgress.start()
  next()
})

router.afterEach((_to) => {
  NProgress.done()
})

export default router
