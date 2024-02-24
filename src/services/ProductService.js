import ApiService from './BaseService'

export const getCategoriesProduct = (id = '') =>
  ApiService.fetchData({
    url: '/category/' + id,
    method: 'get',
  })

export const createCategoryProduct = (data) =>
  ApiService.fetchData({
    url: '/category',
    method: 'post',
    data,
  })

export const updateCategoryProduct = (id, data) =>
  ApiService.fetchData({
    url: '/category/' + id,
    method: 'put',
    data,
  })

export const deleteCategoryProduct = (id) =>
  ApiService.fetchData({
    url: '/category/' + id,
    method: 'delete',
  })
