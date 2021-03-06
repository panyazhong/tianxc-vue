import Vue from 'vue';
import VueRouter from 'vue-router';
import layout from '@/views/Layout';
import cardRoutes from './modules/card';
import MaterialRoutes from './modules/material';
import UserRoutes from './modules/user';
import userManageRoutes from './modules/userManager';
import videoStudyRoutes from './modules/videoStudy';
import SignRoutes from './modules/sign';
import UserPortraitRoutes from './modules/userPortrait';
import WageRoutes from './modules/wage';

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
          roles: ['admin', 'user', 'manager'],
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
  ...SignRoutes,
  ...UserRoutes,
  ...UserPortraitRoutes,
  ...WageRoutes,
];

const createRouter = () =>
  new VueRouter({
    mode: 'hash',
    routes: staticRoutes,
  });

const router = createRouter();

export default router;
