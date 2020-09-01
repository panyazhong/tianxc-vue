import request from '@/utils/request';

export function upload(data) {
  return request({
    url: '/api/upload/uploadExcel',
    method: 'post',
    data: data,
  });
}
