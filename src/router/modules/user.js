import layout from '@/views/Layout';

const UserRoutes = [
  {
    path: '',
    component: layout,
    children: [
      {
        path: '/user',
        component: () => import('@/views/User'),
        meta: {
          title: '个人中心',
          icon: 'el-icon-user',
          roles: ['admin', 'user'],
        },
      },
    ],
  },
];

export default UserRoutes;
