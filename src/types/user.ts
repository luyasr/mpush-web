export interface LoginRequest {
  username: string
  password: string
}

export interface LoginResponse {
  access_token: string
  refresh_token: string
}

export interface LogoutRequest {
  access_token: string | null
  refresh_token: string | null
}

export interface LogoutResponse {}

export interface QueryUserRequest {
  id: number
}

export interface QueryUserResponse {
  id: number
  username: string
  nickname: string
  avatar: string
}
