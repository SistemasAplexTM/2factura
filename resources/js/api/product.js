import request from '@/utils/request'

export function addProduct(data) {
  return request({
    url: 'api/product',
    method: 'post',
    data
  })
}

export function urlPrint() {
  return request({
    url: 'api/product/urlPrint',
    method: 'get'
  })
}

export function print(url) {
  return request({
    url,
    method: 'get'
  })
}

export function byId(id) {
  return request({
    url: 'api/product/' + id,
    method: 'get'
  })
}
