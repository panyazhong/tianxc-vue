import layout from '@/views/Layout';

const RankRoutes = [
  {
    path: '',
    component: layout,
    children: [
      {
        path: '/rank',
        name: 'Rank',
        component: () => import('@/views/Rank'),
        meta: {
          title: '个人年度排行统计',
          roles: ['admin', 'user'],
          icon: 'el-icon-rank',
        },
      },
    ],
  },
];

export default RankRoutes;
