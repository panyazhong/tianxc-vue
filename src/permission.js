import router from './router'
import store from './store'
import { getToken } from './utils/cookie'
import { Message } from 'element-ui'

router.beforeEach(async (to, from, next) => {
  const { user, accessedRoutes } = store.getters
  const routerLength = accessedRoutes.length

  const token = getToken()

  if (token) {
    if (!routerLength) {
      await store.dispatch('GetUserInfo')

      const { user } = store.getters
      const { role } = user

      await store.dispatch('GeneratorRoutes', role)
      const accessedRoutes = store.getters.accessedRoutes
      router.addRoutes(accessedRoutes)
      next({ ...to, replace: true })
    } else {
      if (to.path === '/login') {
        Message({
          message: '请勿重复登录',
          type: 'warning',
          duration: 3000,
        })
        next({ path: '/dashboard' })
        return
      }
    }
  }

  next()
})
