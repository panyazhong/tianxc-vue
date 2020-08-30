import { asyncRoutes } from '../../router'

/**
 * 判断用户是否具有权限
 * role
 * routes
 */
const hasPermission = (role, route) => {
  if (route.meta && route.meta.roles) {
    return route.meta.roles.includes(role)
  } else {
    return true
  }
}

/**
 * 过滤动态路由
 * @param {*} asyncRoutes
 * @param {*} role
 */
const filetrRoutes = (asyncRoutes, role) => {
  if (role === 'admin') {
    return asyncRoutes
  }
  const accessedRouters = asyncRoutes.filter((route) => {
    if (hasPermission(role, route)) {
      if (route.children && route.children.length) {
        route.children = filetrRoutes(route.children, role)
      }
      return true
    }
    return false
  })

  return accessedRouters
}

const permissin = {
  state: {
    accessedRoutes: [],
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.accessedRoutes = routes
    },
  },
  actions: {
    GeneratorRoutes({ commit }, role) {
      return new Promise((resolve, reject) => {
        const accessedRoutes = filetrRoutes(asyncRoutes, role)

        commit('SET_ROUTES', accessedRoutes)

        resolve()
      })
    },
  },
}

export default permissin
