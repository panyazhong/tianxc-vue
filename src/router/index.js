import Vue from 'vue';
import VueRouter from 'vue-router';
import layout from '@/views/Layout';
import materialRoutes from './modules/material';

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
          iconL: 'el-icon-menu',
        },
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/Dashboard'),
      },
    ],
  },
  ...materialRoutes,
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
