export const stringifyRequest = (data: any) => // (... headers?: any)
  JSON.stringify(data, (key, value) => {
    if (typeof value === 'string' && key) {
      // TODO
    }
    return value
  })

export const parseResponse = (data: any) =>
  JSON.parse(data, (key, value) => {
    if (typeof value === 'string' && key) {
      // TODO
    }
    return value
  })

export const transformRequest = [
  stringifyRequest
]

export const transformResponse = [
  parseResponse
]
