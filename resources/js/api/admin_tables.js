import request from '@/utils/request'

export function addAdmin(type,data) {
  return request({
    url: 'api/admin/'+ type,
    method: 'post',
    data
  })
}

export function adminById(id) {
  return request({
    url: 'api/admin/default/'+ id + '/edit',
    method: 'get'
  })
}

export function updateAdmin(id,data) {
  return request({
    url: 'api/admin/default/'+ id,
    method: 'put',
    data
  })
}

export function destroy(id) {
  return request({
    url: 'api/admin/'+ id,
    method: 'delete'
  })
}
