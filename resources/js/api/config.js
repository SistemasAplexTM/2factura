import request from '@/utils/request'

export function saveConfig(key,data) {
  return request({
    url: 'api/config/' + key,
    method: 'post',
    data
  })
}

export function getConfig(key) {
  return request({
    url: 'api/config/' + key,
    method: 'get'
  })
}
