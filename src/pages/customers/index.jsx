import { Button, Modal, Space, Table } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCustomers } from '../../app/auth'
import { blockUserApi, unblockUserApi } from '../../services/AuthService'

const Customers = () => {
  const { confirm } = Modal
  const dispatch = useDispatch()
  const { loading, list } = useSelector((state) => state.auth.customers)

  const onUnblock = async (id) => {
    confirm({
      title: 'Are you sure to unblock this account?',
      okText: 'Unblock',
      cancelText: 'Cancel',
      async onOk() {
        await unblockUserApi(id)
        dispatch(getCustomers())
      },
    })
  }

  const onBlock = async (id) => {
    confirm({
      title: 'Are you sure to block this account?',
      okText: 'Block',
      okType: 'danger',
      cancelText: 'Cancel',
      async onOk() {
        await blockUserApi(id)
        dispatch(getCustomers())
      },
    })
  }

  const columns = [
    {
      title: 'Name',
      key: 'name',
      render: (props) => (
        <Space size='small'>
          <span>{props.firstname}</span>
          <span>{props.lastname}</span>
        </Space>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'mobile',
    },
    {
      title: 'Total Wishlist',
      key: 'wishlist',
      render: (props) => <span>{props.wishlist.length}</span>,
    },
    {
      title: 'Total Cart',
      key: 'cart',
      render: (props) => <span>{props.cart.length}</span>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (props) => (
        <>
          {props.isBlocked ? (
            <Button type='primary' onClick={() => onUnblock(props._id)}>
              Unblock
            </Button>
          ) : (
            <Button type='primary' danger onClick={() => onBlock(props._id)}>
              Block
            </Button>
          )}
        </>
      ),
    },
  ]

  useEffect(() => {
    dispatch(getCustomers())
  }, [])

  return (
    <div>
      <h3 className='mb-4'>Customers</h3>
      <div className=''>
        <Table
          columns={columns}
          dataSource={list.filter((data) => data.role !== 'admin')}
          loading={loading}
          rowKey='_id'
        />
      </div>
    </div>
  )
}

export default Customers
