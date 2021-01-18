import request from '@/utils/request';

export function sendBeacon(data) {
  return request({
    url: '/api/behavior/send',
    method: 'post',
    data,
  });
}
