import JsCookie from 'js-cookie';

export function setCookie(token) {
  JsCookie.set('token', token);
}

export function getCookie() {
  return JsCookie.get('token');
}
