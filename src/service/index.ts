// service 统一出口
import HRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const hRequest = new HRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default hRequest
