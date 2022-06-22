export interface RequestOptions {
  // 是否处理响应结果
  isTransformResponse?: boolean
}

// 返回res.data的interface
export interface IResponse<T = any> {
  code: number | string
  result: T
  message: string
  status: string | number
}
