import request from '@/utils/request'

export function login(username, password, remember) {
  return request({
    url: 'api/auth/login',
    method: 'post',
    data: {
      email: username,
      password,
      remember_me: remember
    }
  })
}

// export function prueba() {
//   return request({
//     url: 'api/prueba',
//     method: 'get'
//   })
// }

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: 'api/auth/logout',
    method: 'get'
  })
}
