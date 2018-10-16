import request from '@/utils/request'

export function updateCell(data) {
  return request({
    url: 'api/global/updateCell',
    method: 'put',
    data
  })
}

export function getUrlImpressInfo() {
  return request({
    url: 'api/global/getUrlImpressInfo',
    method: 'get'
  })
}

export function getJsWebClientPrint(url) {
  return request({
    url,
    method: 'get'
  })
}
