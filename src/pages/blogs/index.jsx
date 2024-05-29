import { Table } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchBlogApi } from '../../app/blog'
import { getCategoriesBlogApi } from '../../app/categoriesBlog'

const BlogList = () => {
  const dispatch = useDispatch()
  const { loading, data } = useSelector((state) => state.blog.list)

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Category',
      dataIndex: 'category',
    },
    {
      title: 'Total Views',
      dataIndex: 'numViews',
    },
    {
      title: 'Total Likes',
      dataIndex: 'likes',
      render: (likes) => <span>{likes.length}</span>,
    },
  ]

  useEffect(() => {
    dispatch(fetchBlogApi())
    dispatch(getCategoriesBlogApi())
  }, [])

  return (
    <div>
      <div className='d-flex justify-content-between mb-4'>
        <h3 className=''>Blogs</h3>
        <Link to='/admin/add-blog'>
          <button className='btn btn-success border-0 rounded-3 '>Add Blog</button>
        </Link>
      </div>
      <div className=''>
        <Table columns={columns} dataSource={data} loading={loading} rowKey='_id' />
      </div>
    </div>
  )
}

export default BlogList
