import layout from '@/views/Layout';
const SignRoutes = [
  {
    path: '/sign',
    component: layout,
    meta: {
      title: '用户签名',
      icon: 'el-icon-postcard',
    },
    children: [
      {
        path: 'upload',
        name: 'SignUpload',
        meta: {
          roles: ['admin'],
          title: '用户签名-上传',
        },
        component: () =>
          import(/* webpackChunkName: "about" */ '../../views/Sign/Upload'),
      },
      {
        path: 'signList',
        name: 'SignList',
        meta: {
          roles: ['admin'],
          title: '用户签名-列表',
        },
        component: () =>
          import(/* webpackChunkName: "about" */ '../../views/Sign/SignList'),
      },
    ],
  },
];

export default SignRoutes;
