import request from '@/utils/request'

export function login(data) {
  return request({
    url: 'api/user/login',
    method: 'post',
    data: data,
  })
}

export function register(data) {
  return request({
    url: '/api/user/register',
    method: 'post',
    data: data,
  })
}

export function delUser(params) {
  return request({
    url: '/api/user/editUser',
    method: 'delete',
    params: params,
  })
}

export function getUserInfo() {
  return request({
    url: 'api/user/getUserInfo',
    method: 'get',
  })
}

export function getUsers(params) {
  return request({
    url: 'api/user/getUsers',
    method: 'get',
    params: params,
  })
}

export function getRoles() {
  return request({
    url: 'api/role/getRoles',
    method: 'get',
  })
}

export function changePwd(data) {
  return request({
    url: '/api/user/changePwd',
    method: 'post',
    data: data,
  })
}
