import axios from 'axios'
import { localStorage } from '../storage'

import { responseInterceptor, responseErrorInterceptor } from './interceptors'
import { transformRequest, transformResponse } from './transforms'

import Partners from './partners'

export { ApiError } from './interceptors'

export const client = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})

client.defaults.headers['Content-Type'] = 'application/json'
client.defaults.headers.Accept = 'application/json'

client.defaults.transformRequest = transformRequest
client.defaults.transformResponse = transformResponse

const setAuthorization = (jwtToken) => {
  if (jwtToken) {
    client.defaults.headers.common.Authorization = `JWT ${jwtToken}`
    localStorage.set('authToken', jwtToken)
  } else {
    delete client.defaults.headers.common.Authorization
    localStorage.remove('authToken')
  }
}

const token = localStorage.get('authToken')
if (token) {
  setAuthorization(token)
}

client.interceptors.response.use(responseInterceptor, responseErrorInterceptor)

export default {
  setAuthorization,
  partners: Partners(client)
}
