import layout from '@/views/Layout';

const videoStudyRoutes = [
  {
    path: '/videoStudy',
    component: layout,
    meta: {
      title: '视频学习专区',
      roles: ['admin', 'user'],
      icon: 'el-icon-video-camera-solid',
    },
    children: [
      {
        path: 'download',
        name: 'VideoDownload',
        component: () => import('@/views/videoStudy/Download'),
        meta: {
          title: '视频学习观看区',
          roles: ['admin', 'user'],
        },
      },
      {
        path: 'upload',
        name: 'VideoUpload',
        component: () => import('@/views/videoStudy/Upload'),
        meta: {
          title: '视频学习上传区',
          roles: ['admin'],
        },
      },
    ],
  },
];

export default videoStudyRoutes;
