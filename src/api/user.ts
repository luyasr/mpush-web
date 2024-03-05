import { client } from './client'
import config from '@/config/config'
import type { Response } from '@/types/index'
import type { LoginRequest, LoginResponse, LogoutRequest, LogoutResponse } from '@/types/user'

export const Login = (req: LoginRequest) => {
  return client.post<Response<LoginResponse>>(
    '/api/v1/token/login',
    req
  )
}

export const Logout = (req: LogoutRequest) => {
  return client.post<Response<LogoutResponse>>(
    `${config.message_push_server}/api/v1/token/logout`,
    req
  )
}
