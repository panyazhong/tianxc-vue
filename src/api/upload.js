import request from '@/utils/request'

export function upload(data) {
  return request({
    url: '/upload/upload',
    method: 'post',
    data: data,
  })
}
