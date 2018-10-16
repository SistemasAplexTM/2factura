import request from '@/utils/request'

export function addProduct(data) {
  return request({
    url: 'api/product',
    method: 'post',
    data
  })
}
