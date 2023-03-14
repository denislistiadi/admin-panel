import React from 'react'
import { BsArrowDownRight, BsArrowUpRight } from 'react-icons/bs'
import { Column } from '@ant-design/plots'
import { Table } from 'antd'
const columns = [
  {
    title: 'No',
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
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    staus: `London, Park Lane no. ${i}`,
  })
}
const Dashboard = () => {
  const data = [
    {
      type: 'Jan',
      sales: 38,
    },
    {
      type: 'Feb',
      sales: 52,
    },
    {
      type: 'Mar',
      sales: 61,
    },
    {
      type: 'Apr',
      sales: 145,
    },
    {
      type: 'May',
      sales: 48,
    },
    {
      type: 'Jun',
      sales: 58,
    },
    {
      type: 'July',
      sales: 38,
    },
    {
      type: 'Aug',
      sales: 31,
    },
    {
      type: 'Sept',
      sales: 86,
    },
    {
      type: 'Oct',
      sales: 65,
    },
    {
      type: 'Nov',
      sales: 78,
    },
    {
      type: 'Dec',
      sales: 138,
    },
  ]
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    color: () => {
      return '#ffd333'
    },
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Month',
      },
      sales: {
        alias: 'Income',
      },
    },
  }
  return (
    <div>
      <h3 className='mb-4 title'>Dashboard</h3>
      <div className='d-flex justify-content-between align-items-center gap-3'>
        <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3'>
          <div>
            <p className='desc'>Total</p>
            <h4 className='mb-0 sub-title'>$1100</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='text-danger'>
              <BsArrowDownRight /> 32%
            </h6>
            <p className='mb-0  desc'>Compared To April 2022</p>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3'>
          <div>
            <p className='desc'>Total</p>
            <h4 className='mb-0 sub-title'>$1100</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='text-success'>
              <BsArrowUpRight /> 32%
            </h6>
            <p className='mb-0  desc'>Compared To April 2022</p>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3'>
          <div>
            <p className='desc'>Total</p>
            <h4 className='mb-0 sub-title'>$1100</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='text-danger'>
              <BsArrowDownRight /> 32%
            </h6>
            <p className='mb-0 desc'>Compared To April 2022</p>
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <h3 className='mb-5 title'>Income Statics</h3>
        <div>
          <Column {...config} />
        </div>
      </div>
      <div className='mt-4'>
        <h3 className='mb-5 title'>Recent Orders</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
