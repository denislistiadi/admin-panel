import { Button, Modal, Space, Table } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchBlogApi } from '../../app/blog'
import { deleteBlogApi } from '../../services/BlogService'

const BlogList = () => {
  const { confirm } = Modal
  const dispatch = useDispatch()
  const { loading, data } = useSelector((state) => state.blog.list)

  const onEdit = (data) => {
    console.log(data)
  }

  const showDeleteConfirm = (id) => {
    confirm({
      title: 'Are you sure?',
      content: 'If a blog is deleted it cannot be returned',
      okText: 'Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      async onOk() {
        await deleteBlogApi(id)
        dispatch(fetchBlogApi())
      },
      onCancel() {
        console.log('Cancel')
      },
    })
  }

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
    {
      title: 'Action',
      key: 'action',
      render: (props) => {
        return (
          <Space size='middle'>
            <Button type='primary' onClick={() => onEdit(props)}>
              Edit
            </Button>
            <Button type='primary' onClick={() => showDeleteConfirm(props._id)} danger>
              Delete
            </Button>
          </Space>
        )
      },
    },
  ]

  useEffect(() => {
    dispatch(fetchBlogApi())
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
