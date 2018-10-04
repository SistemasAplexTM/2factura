const Token = 'token'
const Auth = 'auth'

export function getToken() {
  return localStorage.getItem(Token)
}

export function setToken(token) {
  return localStorage.setItem(Token, token)
}

export function removeToken() {
  return localStorage.removeItem(Token)
}

export function getAuth() {
  return localStorage.getItem(Auth)
}

export function setAuth(auth) {
  return localStorage.setItem(Auth, auth)
}
