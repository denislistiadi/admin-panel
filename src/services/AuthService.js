import ApiService from './BaseService'

export const LoginApi = async (data) =>
  ApiService.fetchData({
    url: '/user/login-admin',
    method: 'post',
    data,
  })

export const logoutApi = async () =>
  ApiService.fetchData({
    url: '/user/logout',
    method: 'get',
  })
