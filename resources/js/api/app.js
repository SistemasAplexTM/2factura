import request from '@/utils/request'

export function initialise() {
  return request({
    url: 'api/app/initialise',
    method: 'get'
  })
}
