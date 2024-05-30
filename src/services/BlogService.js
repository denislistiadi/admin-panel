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

// BLOGS
export const getBlogApi = (id = '') =>
  ApiService.fetchData({
    url: '/blog/' + id,
    method: 'get',
  })

export const createBlogApi = (data) =>
  ApiService.fetchData({
    url: '/blog',
    method: 'post',
    data,
  })

export const updateBlogApi = (id, data) =>
  ApiService.fetchData({
    url: '/blog/' + id,
    method: 'put',
    data,
  })

export const deleteBlogApi = (id) =>
  ApiService.fetchData({
    url: '/blog/' + id,
    method: 'delete',
  })

export const uploadBlogImageApi = (id, data) =>
  ApiService.fetchData({
    url: '/blog/upload/' + id,
    method: 'put',
    data,
  })
