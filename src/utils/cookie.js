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
  return JsCookie.set('behavior', behaviors);
}

export function getUserBehavior() {
  return JsCookie.get('behavior');
}

export function removeUserBehavior() {
  JsCookie.remove('behavior');
}
