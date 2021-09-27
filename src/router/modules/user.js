import layout from '@/views/Layout';
import { getUserInfo } from '../../api/user';

const UserRoutes = [
  {
    path: '',
    component: layout,
    children: [
      {
        path: '/userInfo',
        name: 'UserInfo',
        component: () => import('@/views/UserInfo'),
        meta: {
          title: '个人中心',
          icon: 'el-icon-user',
          roles: ['admin', 'user', 'manager'],
        },
      },
    ],
  },
];

export default UserRoutes;
