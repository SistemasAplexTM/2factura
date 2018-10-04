import request from '@/utils/request'

export function allUsers() {
  return request({
    url: 'api/user/all',
    method: 'get'
  })
}

export function userById(id) {
  return request({
    url: 'api/user/'+ id,
    method: 'get'
  })
}

export function destroy(id) {
  return request({
    url: 'api/user/'+ id,
    method: 'delete'
  })
}

export function addUser(data) {
  return request({
    url: 'api/user/add',
    method: 'post',
    data
  })
}

export function updateUser(id, data) {
  return request({
    url: 'api/user/' + id,
    method: 'put',
    data
  })
}

export function allRoles() {
  return request({
    url: 'api/prueba',
    method: 'get'
  })
}

export function dataUnique(table, colum, data, id) {
  return request({
    url: 'api/unique/'+ table + '/'+ colum + '/'+ data + '/'+ id ,
    method: 'get'
  })
}
