import request from '@/utils/request';

/**
 * 记录用户登录时间， 登出时间在用户注销时记录
 * ？？用户ip地址
 * ？？用户增长
 */
export function login(data) {
  return request({
    url: 'api/user/login',
    method: 'post',
    data: data,
  });
}

export function register(data) {
  return request({
    url: '/api/user/register',
    method: 'post',
    data: data,
  });
}

export function delUser(params) {
  return request({
    url: '/api/user/editUser',
    method: 'delete',
    params: params,
  });
}

export function getUserInfo() {
  return request({
    url: 'api/user/getUserInfo',
    method: 'get',
  });
}

export function getUsers(params) {
  return request({
    url: 'api/user/getUsers',
    method: 'get',
    params: params,
  });
}

export function getRoles() {
  return request({
    url: 'api/role/getRoles',
    method: 'get',
  });
}

export function changePwd(data) {
  return request({
    url: '/api/user/changePwd',
    method: 'post',
    data: data,
  });
}

// 用户注销  统计用户在线时长等信息
export function logOut(params) {
  return request({
    url: '/api/user/logout',
    method: 'post',
    data: params,
  });
}
