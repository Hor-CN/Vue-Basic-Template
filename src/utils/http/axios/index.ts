import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { getMessage } from './status'
import { IResponse } from './type'

// 如果请求超过 `timeout` 的时间，请求将被中断
axios.defaults.timeout = 5000
// 表示跨域请求时是否需要使用凭证
axios.defaults.withCredentials = false
// axios.defaults.headers.common['token'] =  AUTH_TOKEN
// 允许跨域
axios.defaults.headers.post['Access-Control-Allow-Origin-Type'] = '*'
// 返回支持的状态码
axios.defaults.validateStatus = function (status: number) {
  return status >= 200 && status <= 500
}

// 创建axios实例
const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.BASE_URL}`,
})

// axios实例拦截请求
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // const token = getToken();
    // if (token) {
    //   // config.headers.Authorization = `${TokenPrefix}${token}`
    // }
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

// axios实例拦截响应
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // if (response.headers.authorization) {
    //   localStorage.setItem('app_token', response.headers.authorization)
    // } else if (response.data && response.data.token) {
    //   localStorage.setItem('app_token', response.data.token)
    // }
    if (response.status === 200) {
      return response
    }
    getMessage(response.status)
    return response
  },
  // 请求失败
  (error: any) => {
    const { response } = error
    if (response) {
      // 请求已发出，但是不在2xx的范围
      getMessage(response.status)
      return Promise.reject(response.data)
    }
    getMessage('网络连接异常,请稍后再试!')
  }
)

const request = <T = any>(config: AxiosRequestConfig): Promise<T> => {
  const conf = config
  return new Promise((resolve) => {
    axiosInstance
      .request<any, AxiosResponse<IResponse>>(conf)
      .then((res: AxiosResponse<IResponse>) => {
        const {
          data: { result },
        } = res
        resolve(result as T)
      })
  })
}

export function get<T = any>(config: AxiosRequestConfig): Promise<T> {
  return request({ ...config, method: 'GET' })
}

export function post<T = any>(config: AxiosRequestConfig): Promise<T> {
  return request({ ...config, method: 'POST' })
}
