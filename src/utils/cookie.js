import JsCookie from 'js-cookie';

export function setToken(token) {
  let seconds = 6 * 60 * 60;
  let expires = new Date(new Date() * 1 + seconds * 1000);
  return JsCookie.set('token', token, {
    expires: expires,
  });
}

export function getToken() {
  return JsCookie.get('token');
}

export function removeToken() {
  JsCookie.remove('token');
}

export function setUserBehavior(behaviors) {
  sessionStorage.setItem('behavior', behaviors);
}

export function getUserBehavior() {
  return sessionStorage.getItem('behavior');
}

export function removeUserBehavior() {
  sessionStorage.removeItem('behavior');
}
