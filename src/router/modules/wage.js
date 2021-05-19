import layout from '@/views/Layout';
import { getUserInfo } from '../../api/user';

const WageRoutes = [
  {
    path: '/wage',
    component: layout,
    meta: {
      title: '工资信息',
      roles: ['admin', 'user'],
      icon: 'el-icon-money',
    },
    children: [
      {
        path: 'wage-info',
        name: 'WageInfo',
        component: () => import('@/views/Wage/WageInfo'),
        meta: {
          title: '工资信息',
          roles: ['admin', 'user'],
        },
      },
      {
        path: 'wage-upload',
        name: 'WageUpload',
        component: () => import('@/views/Wage/WageUpload/index'),
        meta: {
          title: '工资信息表上传',
          roles: ['admin'],
        },
      },
    ],
  },
];

export default WageRoutes;
