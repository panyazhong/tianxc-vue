import request from '@/utils/request';

export function getRank(params) {
  return request({
    url: '/api/upload/getUserRank',
    method: 'get',
    params: params,
  });
}
