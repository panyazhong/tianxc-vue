import Vue from 'vue';
import VueRouter from 'vue-router';
import layout from '@/views/Layout';
import cardRoutes from './modules/card';
import MaterialRoutes from './modules/material';
import UserRoutes from './modules/user';
import userManageRoutes from './modules/userManager';

Vue.use(VueRouter);

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
];

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
  ...cardRoutes,
  ...MaterialRoutes,
  ...userManageRoutes,
  ...UserRoutes,
];

const createRouter = () =>
  new VueRouter({
    mode: 'hash',
    routes: staticRoutes,
  });

const router = createRouter();

// export function resetRouter() {
//   const newRouter = createRouter();
//   router.matcher = newRouter.matcher; // reset router
// }

// router.$addRoutes = (params) => {
//   resetRouter();
//   router.addRoutes(params);
// };

export default router;
