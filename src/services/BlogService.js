import ApiService from './BaseService'

// CATEGORIES
export const getCategoriesBlog = (id = '') =>
  ApiService.fetchData({
    url: '/blog-category/' + id,
    method: 'get',
  })

export const createCategoryBlog = (data) =>
  ApiService.fetchData({
    url: '/blog-category',
    method: 'post',
    data,
  })

export const updateCategoryBlog = (id, data) =>
  ApiService.fetchData({
    url: '/blog-category/' + id,
    method: 'put',
    data,
  })

export const deleteCategoryBlog = (id) =>
  ApiService.fetchData({
    url: '/blog-category/' + id,
    method: 'delete',
  })
