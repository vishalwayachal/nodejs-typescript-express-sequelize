interface ResultObj {
  success?: boolean,
  code?: number,
  message?: string,
  dataCount?: number,
  data?: any
}

export function success(data: any): ResultObj {
  data.success = !!(data.success)
  data.code = (data.code) ? (data.code) : 0
  data.message = (data.message) ? data.message : 'Success'
  data.result = (data.data) ? data.data : []
  try {
    data.dataCount = data.data.length
  } catch (ex) { }
  data.stack = (data.stack) ? data.stack : []
  const finalObj = {
    success: data.success,
    statusCode: data.code,
    message: data.message,
    dataCount: data.dataCount,
    data: data.result,
  }
  return finalObj
}

export function error(e: any): ResultObj {
  const message = (e.type) ? e.type : e.message
  const errorJson = this.success({
    success: false,
    data: e.data,
    statusCode: e.code,
    message: (e.type) ? e.type : e.message,
  })
  if (e.stack) {
    errorJson.stack = e.stack
  }
  return errorJson
}
exports.error = error
