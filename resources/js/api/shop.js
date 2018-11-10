import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/shop',
    method: 'post',
    data
  })
}
