import layout from '@/views/Layout';
const materialRoutes = [
  {
    path: '/material',
    component: layout,
    meta: {
      title: '资料',
      icon: 'el-icon-menu',
    },
    children: [
      {
        path: 'upload',
        name: 'Upload',
        meta: {
          roles: ['admin', 'user'],
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
    ],
  },
];

export default materialRoutes;
