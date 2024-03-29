export class ApiError extends Error {
  code;

  constructor (code, ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params)

    // Custom debugging information
    this.code = code

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError)
    }
  }
}

// const badCredentialsErrorHandler = (res: AxiosResponse, code: string, message: string) => {}

// const tokenExpiredErrorHandler = (res: AxiosResponse, code: string, message: string) => {}

const defaultApiErrorHandler = (res, code, message) => {
  return Promise.reject(new ApiError(code, message))
}

export const responseInterceptor = (res) => {
  if (!res.data.errors) {
    return res.data.data
  }

  const { message, extensions } = res.data.errors[0]
  const code = extensions ? extensions.code : 'API_ERRORS.GENERIC'

  switch (code) {
    // case "API_ERRORS.BAD_CREDENTIALS": badCredentialsErrorHandler(res, code, message);
    // case "API_ERRORS.TOKEN_EXPIRED": tokenExpiredErrorHandler(res, code, message);
    default: return defaultApiErrorHandler(res, code, message)
  }
}

export const responseErrorInterceptor = (error) => {
  return Promise.reject(error.message)
}
