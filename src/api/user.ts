import { client } from './client'
import config from '@/config/config'
import type { Response } from '@/types/index'
import type { LoginRequest, LoginResponse, LogoutRequest, LogoutResponse, QueryUserResponse } from '@/types/user'

export const Login = (req: LoginRequest) => {
  return client.post<Response<LoginResponse>>(`${config.messagePushServer}/api/v1/token/login`, req)
}

export const Logout = (req: LogoutRequest) => {
  return client.post<Response<LogoutResponse>>(
    `${config.messagePushServer}/api/v1/token/logout`,
    req
  )
}

export const QueryUser = () => {
  return client.get<Response<QueryUserResponse>>(`${config.messagePushServer}/api/v1/user`)
}
