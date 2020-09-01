import JsCookie from 'js-cookie';

export function setToken(token) {
  return JsCookie.set('token', token);
}

export function getToken() {
  return JsCookie.get('token');
}

export function removeToken() {
  JsCookie.remove('token');
}
