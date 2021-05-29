import layout from '@/views/Layout';
const cardRoutes = [
  {
    path: '/card',
    component: layout,
    meta: {
      title: '红黄牌',
      icon: 'el-icon-document',
      roles: ['admin', 'user'],
    },
    children: [
      {
        path: 'upload',
        name: 'Upload',
        meta: {
          roles: ['admin'],
          title: '上传',
        },
        component: () =>
          import(/* webpackChunkName: "about" */ '../../views/Card/Upload'),
      },
      {
        path: 'monthCard',
        name: 'MonthCard',
        meta: {
          roles: ['admin', 'user'],
          title: '当月红黄牌进度',
        },
        component: () =>
          import(/* webpackChunkName: "about" */ '../../views/Card/MonthCard'),
      },

      {
        path: 'yearCard',
        name: 'YearCard',
        meta: {
          roles: ['admin', 'user'],
          title: '年度累计红黄牌',
        },
        component: () =>
          import(/* webpackChunkName: "about" */ '../../views/Card/YearCard'),
      },
    ],
  },
];

export default cardRoutes;
