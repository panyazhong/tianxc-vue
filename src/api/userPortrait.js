import request from '@/utils/request';

export function getModulesInfo(params) {
  return request({
    url: '/api/behavior/getModulesInfo',
    method: 'get',
    params,
  });
}

export function getUserInlineTime(params) {
  return request({
    url: '/api/behavior/getUserInlineTime',
    method: 'get',
    params,
  });
}
