import request from '@/utils/request';

export function getYellowcardLsit() {
  return request({
    url: '/api/yellowcard/getyellowCardList',
    method: 'get',
  });
}

export function uploadCard(data) {
  return request({
    url: '/api/yellowcard/uploadCard',
    method: 'post',
    data: data,
  });
}
