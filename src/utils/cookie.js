import JsCookie from 'js-cookie'

export function setToken(token) {
  JsCookie.set('token', token)
}

export function getToken() {
  return JsCookie.get('token')
}
