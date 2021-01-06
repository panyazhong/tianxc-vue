import request from '@/utils/request';

export function upload(data) {
  return request({
    url: '/api/sign/uploadSign',
    method: 'post',
    data: data,
  });
}

export function getSignList(params) {
  return request({
    url: '/api/sign/getSignList',
    method: 'get',
    params,
  });
}

export function deleteSignById(params) {
  return request({
    url: '/api/sign/deleteSignById',
    method: 'delete',
    params,
  });
}
