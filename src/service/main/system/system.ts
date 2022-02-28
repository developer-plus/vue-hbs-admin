import hRequest from '../../index'

import { IDataType } from '../../types'

export function getPageListData(url: string, queryInfo: any) {
  return hRequest.post<IDataType>({
    url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return hRequest.delete<IDataType>({
    url: url
  })
}
