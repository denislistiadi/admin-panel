import { Table } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const BrandList = () => {
  const columns = [
    {
      title: 'SNo',
      dataIndex: 'key',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Product',
      dataIndex: 'product',
    },
    {
      title: 'Status',
      dataIndex: 'staus',
    },
  ]
  const data1 = []
  for (let i = 0; i < 20; i++) {
    data1.push({
      key: i,
      name: `Edward King ${i}`,
      product: 32,
      staus: `London, Park Lane no. ${i}`,
    })
  }

  return (
    <div>
      <div className='d-flex justify-content-between mb-4'>
        <h3 className=''>Brands</h3>
        <Link to='/admin/add-brand'>
          <button className='btn btn-success border-0 rounded-3 '>Add Brand</button>
        </Link>
      </div>
      <div className=''>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  )
}

export default BrandList
