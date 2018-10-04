import request from '@/utils/request'

export function addAdminProduct(type,data) {
  return request({
    url: 'api/adminProduct/'+ type,
    method: 'post',
    data
  })
}

export function getAdminProduct(type) {
  return request({
    url: 'api/adminProduct/'+ type,
    method: 'get'
  })
}

export function getAdminProductMetaByIds(data) {
  return request({
    url: 'api/adminProductMetaByIds',
    method: 'post',
    data
  })
}

export function destroy(type, id) {
  return request({
    url: 'api/adminProduct/'+ type +'/'+ id,
    method: 'delete'
  })
}
