import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/views/Layout'
import materialRoutes from './modules/material'

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
    component: () => import('../views/Login'),
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: staticRoutes,
})

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
        },
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/Dashboard'),
      },
    ],
  },
  ...materialRoutes,
]

export default router
