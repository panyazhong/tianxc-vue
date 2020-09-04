import layout from '@/views/Layout';
const materialRoutes = [
  {
    path: '/material',
    component: layout,
    meta: {
      title: '资料',
      icon: 'el-icon-document',
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
          import(/* webpackChunkName: "about" */ '../../views/Material/Upload'),
      },
      {
        path: 'download',
        name: 'Download',
        meta: {
          roles: ['admin', 'user'],
          title: '下载',
        },
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../../views/Material/Download'
          ),
      },

      {
        path: 'yellowcard',
        name: 'YellowCard',
        meta: {
          roles: ['admin', 'user'],
          title: '红黄牌',
        },
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../../views/Material/YellowCardStatistics'
          ),
      },
    ],
  },
];

export default materialRoutes;
