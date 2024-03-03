import { Button, Space, Table } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { getCategoriesBlogApi, setFormCategoriesBlog } from '../../app/categoriesBlog'
import { deleteCategoryBlog } from '../../services/BlogService'

const BlogCategory = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading, data } = useSelector((state) => state.categoriesBlog.list)

  const onEdit = (data) => {
    dispatch(setFormCategoriesBlog({ isEdit: true, data: data }))
    navigate('/admin/add-blog-category')
  }

  const showDeleteConfirm = (id) => {
    confirm({
      title: 'Are you sure?',
      content: 'If a product category is deleted it cannot be returned',
      okText: 'Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      async onOk() {
        await deleteCategoryBlog(id)
        dispatch(getCategoriesBlogApi())
      },
      onCancel() {
        console.log('Cancel')
      },
    })
  }

  const columns = [
    {
      title: 'Category ID',
      dataIndex: '_id',
    },
    {
      title: 'Title',
      dataIndex: 'title',
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
    dispatch(getCategoriesBlogApi())
  }, [])

  return (
    <div>
      <div className='d-flex justify-content-between mb-4'>
        <h3 className=''>Blog Category</h3>
        <Link to='/admin/add-blog-category'>
          <button className='btn btn-success border-0 rounded-3 '>Add Blog Category</button>
        </Link>
      </div>
      <div className=''>
        <Table columns={columns} dataSource={data} loading={loading} rowKey='_id' />
      </div>
    </div>
  )
}

export default BlogCategory
