import ApiService from './BaseService'

// CATEGORIES
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

// BRAND
export const getBrandProduct = (id = '') =>
  ApiService.fetchData({
    url: '/brand/' + id,
    method: 'get',
  })

export const createBrandProduct = (data) =>
  ApiService.fetchData({
    url: '/brand',
    method: 'post',
    data,
  })

export const updateBrandProduct = (id, data) =>
  ApiService.fetchData({
    url: '/brand/' + id,
    method: 'put',
    data,
  })

export const deleteBrandProduct = (id) =>
  ApiService.fetchData({
    url: '/brand/' + id,
    method: 'delete',
  })
