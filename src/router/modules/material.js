import layout from '@/views/Layout';

const MaterialRoutes = [
  {
    path: '/material',
    component: layout,
    meta: {
      title: '应知应会',
      roles: ['admin', 'user'],
      icon: 'el-icon-download',
    },
    children: [
      {
        path: 'download',
        name: 'Rank',
        component: () => import('@/views/Rank'),
        meta: {
          title: '下载',
          roles: ['admin', 'user'],
        },
      },
    ],
  },
];

export default MaterialRoutes;
