import layout from '@/views/Layout';

const UserPortraitRoutes = [
  {
    path: '',
    component: layout,
    children: [
      {
        path: '/userPortrait',
        name: 'UserPortrait',
        component: () => import('@/views/UserPortrait'),
        meta: {
          title: '用户画像',
          icon: 'el-icon-pie-chart',
          roles: ['admin', 'user'],
        },
      },
    ],
  },
];

export default UserPortraitRoutes;
