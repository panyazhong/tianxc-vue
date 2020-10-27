import Vue from 'vue';
import VueRouter from 'vue-router';
import layout from '@/views/Layout';
import cardRoutes from './modules/card';
import MaterialRoutes from './modules/material';
import UserRoutes from './modules/user';
import userManageRoutes from './modules/userManager';
import videoStudyRoutes from './modules/videoStudy';

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

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
  ...videoStudyRoutes,
  ...userManageRoutes,
  ...UserRoutes,
];

const createRouter = () =>
  new VueRouter({
    mode: 'hash',
    routes: staticRoutes,
  });

const router = createRouter();

export default router;
