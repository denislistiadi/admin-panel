import { Button, Space, Modal, Table } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoriesProductApi, setFormCategoriesProduct } from '../../app/categoriesProduct'
import { useNavigate } from 'react-router-dom'
import { deleteCategoryProduct } from '../../services/ProductService'

const Categories = () => {
  const { confirm } = Modal
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading, data } = useSelector((state) => state.categoriesProduct.list)

  const onAdd = () => {
    dispatch(setFormCategoriesProduct({ isEdit: false, data: { title: '' } }))
    navigate('/admin/add-category')
  }

  const onEdit = (data) => {
    dispatch(setFormCategoriesProduct({ isEdit: true, data: data }))
    navigate('/admin/add-category')
  }

  const showDeleteConfirm = (id) => {
    confirm({
      title: 'Are you sure?',
      content: 'If a product category is deleted it cannot be returned',
      okText: 'Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      async onOk() {
        await deleteCategoryProduct(id)
        dispatch(getCategoriesProductApi())
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
    dispatch(getCategoriesProductApi())
  }, [])

  return (
    <div>
      <div className='d-flex justify-content-between mb-4'>
        <h3 className=''>Product Category</h3>
        <button onClick={onAdd} className='btn btn-success border-0 rounded-3 '>
          Add Product Category
        </button>
      </div>
      <div className=''>
        <Table columns={columns} loading={loading} dataSource={data} rowKey='_id' />
      </div>
    </div>
  )
}

export default Categories
