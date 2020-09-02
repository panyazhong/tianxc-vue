import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/views/Layout'
import materialRoutes from './modules/material'
import RankRoutes from './modules/rank'

Vue.use(VueRouter)

const staticRoutes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/dashboard',
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
    },
    component: () => import('../views/Login'),
  },
]

export const asyncRoutes = [
  {
    path: '',
    component: layout,
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        meta: {
          roles: ['admin', 'user'],
          title: '概览',
          icon: 'el-icon-menu',
        },
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/Dashboard'),
      },
    ],
  },
  ...materialRoutes,
  ...RankRoutes,
]

const createRouter = () =>
  new VueRouter({
    mode: 'hash',
    routes: staticRoutes,
  })

const router = createRouter()

// export function resetRouter() {
//   const newRouter = createRouter();
//   router.matcher = newRouter.matcher; // reset router
// }

// router.$addRoutes = (params) => {
//   resetRouter();
//   router.addRoutes(params);
// };

export default router
