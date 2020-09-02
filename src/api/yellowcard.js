import request from '@/utils/request';

export function getYellowcardLsit() {
  return request({
    url: '/api/yellowcard/getyellowCardList',
    method: 'get',
  });
}
