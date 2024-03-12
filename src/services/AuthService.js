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

export const getCustomersApi = async () =>
  ApiService.fetchData({
    url: '/user',
    method: 'get',
  })

export const unblockUserApi = async (id) =>
  ApiService.fetchData({
    url: '/user/unblock/' + id,
    method: 'put',
  })

export const blockUserApi = async (id) =>
  ApiService.fetchData({
    url: '/user/block/' + id,
    method: 'put',
  })
