import request from '@/utils/request'

export function login(data) {
  return request({
    url: 'api/user/login',
    method: 'post',
    data: data,
  })
}

export function getUserInfo() {
  return request({
    url: 'api/user/getUserInfo',
    method: 'get',
  })
}
