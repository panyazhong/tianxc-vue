import request from '@/utils/request';

export function getExcelList(params) {
  return request({
    url: '/api/upload/getExcelList',
    method: 'get',
  });
}

export function getExcelContent(_id) {
  return request({
    url: '/api/upload/getExcelContent',
    method: 'get',
    params: {
      _id,
    },
  });
}

export function delExcelContent(_id) {
  return request({
    url: '/api/upload/delExcelContent',
    method: 'delete',
    params: {
      _id,
    },
  });
}
