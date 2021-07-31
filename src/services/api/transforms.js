export const stringifyJsonRequest = (data, headers) => {
  if(headers['Content-Type'] === 'application/json') {
    return JSON.stringify(data, (key, value) => {
      //// TODO
      //if (typeof value === 'string' && key) {
      //  // (...)
      //}
      return value
    })
  }
  return data
}

export const parseJsonResponse = (data, headers) => {
  if(headers['Content-Type'] === 'application/json') {
    return JSON.parse(data, (key, value) => {
      //// TODO
      //if (typeof value === 'string' && key) {
      //  // (...)
      //}
      return value
    })
  }
  return data
}

export const transformRequest = [
  stringifyJsonRequest
]

export const transformResponse = [
  parseJsonResponse
]
