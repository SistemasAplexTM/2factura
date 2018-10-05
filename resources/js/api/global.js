import request from '@/utils/request'

export function updateCell(data) {
  return request({
    url: 'api/global/updateCell',
    method: 'put',
    data
  })
}
