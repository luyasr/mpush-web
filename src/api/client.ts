import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios'
import { message } from 'ant-design-vue'

const instance = axios.create({
  baseURL: '',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // TODO: 在发送请求之前将用户的 token 放到请求头中
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 返回响应数据中的data
    return response.data
  },
  (error) => {
    if (error.response) {
      // 请求已发出，但服务器响应的状态码不在 2xx 范围内
      const { status, data } = error.response
      switch (status) {
        // case 400:
        //   message.error('请求错误')
        //   break
        case 401:
          message.error('未授权的访问')
          break
        case 403:
          message.error('拒绝访问')
          break
        // case 404:
        //   message.error('请求的资源不存在')
        //   break
        case 408:
          message.error('请求超时')
          break
        case 500:
          message.error('服务器内部错误')
          break
        default:
          message.error(`${data.reason}`)
      }
      return Promise.reject(data)
    } else if (error.request) {
      // 请求已发出，但没有收到响应
      message.error('请求超时')
      return Promise.reject(error.request)
    } else {
      // 请求未发送, 出现了一些错误
      message.error('请求错误，请检查连接')
      return Promise.reject(error)
    }
  }
)

export const client = {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return instance.request({ url, method: 'GET', ...config })
  },
  post<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return instance.request({ url, method: 'POST', data, ...config })
  },
  put<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return instance.request({ url, method: 'PUT', data, ...config })
  },
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return instance.request({ url, method: 'DELETE', ...config })
  }
}
