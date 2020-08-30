import layout from '@/views/Layout'
const materialRoutes = [
  {
    path: '/material',
    component: layout,
    children: [
      {
        path: 'upload',
        name: 'Upload',
        meta: {
          roles: ['admin', 'user'],
        },
        component: () =>
          import(/* webpackChunkName: "about" */ '../../views/Upload'),
      },
    ],
  },
]

export default materialRoutes
