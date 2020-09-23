import layout from '@/views/Layout';

const userManageRoutes = [
  {
    path: '/user',
    component: layout,
    meta: {
      title: '用户管理',
      icon: 'el-icon-s-custom',
      roles: ['admin'],
    },
    children: [
      {
        path: 'userManager',
        name: 'UserManager',
        component: () => import('@/views/User'),
        meta: {
          title: '用户管理',
          roles: ['admin'],
        },
      },
    ],
  },
];

export default userManageRoutes;
