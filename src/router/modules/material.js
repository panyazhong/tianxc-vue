import layout from '@/views/Layout';

const MaterialRoutes = [
  {
    path: '/material',
    component: layout,
    meta: {
      title: '经验分享专区',
      roles: ['admin', 'user'],
      icon: 'el-icon-download',
    },
    children: [
      {
        path: 'download',
        name: 'MaterialShare',
        component: () => import('@/views/Material/Download'),
        meta: {
          title: '经验分享阅读区',
          roles: ['admin', 'user'],
        },
      },
      {
        path: 'upload',
        name: 'MaterialUpload',
        component: () => import('@/views/Material/Upload'),
        meta: {
          title: '经验分享上传区',
          roles: ['admin', 'user'],
        },
      },
    ],
  },
];

export default MaterialRoutes;
