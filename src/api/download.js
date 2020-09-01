import request from '@/utils/request';

export function getExcelList(params) {
  return request({
    url: '/api/upload/getExcelList',
    method: 'get',
  });
}

export function getExcelContent(params) {
  return request({
    url: '/api/upload/getExcelContent',
    method: 'get',
    params: {
      _id: params,
    },
  });
}
