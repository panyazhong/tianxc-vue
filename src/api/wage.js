import request from '@/utils/request';

export function getWageInfo(params) {
  return request({
    url: '/api/wage/getWage',
    method: 'get',
    params,
  });
}

export function uploadWage(data) {
  return request({
    url: '/api/wage/batchAddWage',
    method: 'post',
    data,
  });
}
