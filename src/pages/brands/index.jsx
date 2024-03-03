import { Button, Modal, Space, Table } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getBrandApi, setFormBrand } from '../../app/brand'
import { deleteBrandProduct } from '../../services/ProductService'

const BrandList = () => {
  const { confirm } = Modal
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { loading, data } = useSelector((state) => state.brand.list)

  const onAdd = () => {
    dispatch(setFormBrand({ isEdit: false, data: { title: '' } }))
    navigate('/admin/add-brand')
  }

  const onEdit = (data) => {
    dispatch(setFormBrand({ isEdit: true, data: data }))
    navigate('/admin/add-brand')
  }
  const showDeleteConfirm = (id) => {
    confirm({
      title: 'Are you sure?',
      content: 'If a brand is deleted it cannot be returned',
      okText: 'Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      async onOk() {
        await deleteBrandProduct(id)
        dispatch(getBrandApi())
      },
      onCancel() {
        console.log('Cancel')
      },
    })
  }

  const columns = [
    {
      title: 'Brand ID',
      dataIndex: '_id',
    },
    {
      title: 'Name',
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
    dispatch(getBrandApi())
  }, [])

  return (
    <div>
      <div className='d-flex justify-content-between mb-4'>
        <h3 className=''>Brands</h3>
        <button className='btn btn-success border-0 rounded-3' onClick={onAdd}>
          Add Brand
        </button>
      </div>
      <div className=''>
        <Table columns={columns} dataSource={data} loading={loading} rowKey='_id' />
      </div>
    </div>
  )
}

export default BrandList
