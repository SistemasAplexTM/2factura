import request from '@/utils/request'

export function saveConfig(key, type, simple,data) {
  if (simple) {
    data = {type: data}
  }
  return request({
    url: 'api/config/' + key + '/' + type + '/' + simple,
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
