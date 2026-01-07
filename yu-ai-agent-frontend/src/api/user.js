import { request } from './index'

export const userRegister = (params) => {
  return request.post('/user/register', params)
}

export const userLogin = (params) => {
  return request.post('/user/login', params)
}

export const userLogout = () => {
  return request.post('/user/logout')
}

export const getLoginUser = () => {
  return request.get('/user/get/login')
}
