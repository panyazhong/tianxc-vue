import request from '@/utils/request';

export function uploadFile(params) {
  return request({
    url: '/api/material/uploadFile',
    method: 'post',
    data: params,
  });
}

export function getFile(params) {
  return request({
    url: '/api/material/getFile',
    method: 'get',
  });
}

export function deleteFile(params) {
  return request({
    url: '/api/material/deleteFile',
    method: 'delete',
    params: params,
  });
}
