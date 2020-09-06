import layout from '@/views/Layout'

const userManageRoutes = [
  {
    path: '/user',
    component: layout,
    meta: {
      title: '用戶管理',
      icon: 'el-icon-s-custom',
    },
    children: [
      {
        path: 'userManager',
        name: 'UserManager',
        component: () => import('@/views/User'),
        meta: {
          title: '用戶管理',
          roles: ['admin', 'user'],
        },
      },
    ],
  },
]

export default userManageRoutes
