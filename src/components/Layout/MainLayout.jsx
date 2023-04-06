import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Outlet } from 'react-router-dom'
import {
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineAppstoreAdd,
  AiOutlineAppstore,
  AiOutlineHdd,
  AiOutlineBgColors,
} from 'react-icons/ai'
import { IoBasketOutline, IoNotifications } from 'react-icons/io5'
import { HiOutlineNewspaper } from 'react-icons/hi2'
import { HiOutlineClipboardList } from 'react-icons/hi'
import { MdOutlineArticle, MdWrapText, MdOutlineAccountCircle } from 'react-icons/md'
import { Layout, Menu, theme } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const { Header, Sider, Content } = Layout

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  const navigate = useNavigate()

  return (
    <Layout>
      <Sider width={250} trigger={null} collapsible collapsed={collapsed}>
        <div className='logo'>
          <h2 className='text-white flex fs-5 text-center mb-0'>
            <span className='sm-logo'>AP</span> <span className='lg-logo'>Admin Panel</span>
          </h2>
        </div>
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['']}
          onClick={({ key }) => {
            if (key == 'signout') {
              undefined
            } else {
              navigate(key)
            }
          }}
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard className='fs-4' />,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <AiOutlineUser className='fs-4' />,
              label: 'Customers',
            },
            {
              key: 'orders',
              icon: <IoBasketOutline className='fs-4' />,
              label: 'Orders List',
            },
            {
              key: 'product',
              icon: <AiOutlineAppstore className='fs-4' />,
              label: 'Product Management',
              children: [
                {
                  key: 'product-list',
                  icon: <AiOutlineShoppingCart className='fs-4' />,
                  label: 'Product List',
                },
                {
                  key: 'brand',
                  icon: <AiOutlineAppstoreAdd className='fs-4' />,
                  label: 'Brand',
                },
                {
                  key: 'category',
                  icon: <AiOutlineHdd className='fs-4' />,
                  label: 'Category',
                },
                {
                  key: 'color',
                  icon: <AiOutlineBgColors className='fs-4' />,
                  label: 'Color',
                },
              ],
            },
            {
              key: 'blogs',
              icon: <HiOutlineNewspaper className='fs-4' />,
              label: 'Blogs Management',
              children: [
                {
                  key: 'blog-list',
                  icon: <MdOutlineArticle className='fs-4' />,
                  label: 'Blog List',
                },
                {
                  key: 'blog-category',
                  icon: <MdWrapText className='fs-4' />,
                  label: 'Blog Category',
                },
              ],
            },
            {
              key: 'enquiries',
              icon: <HiOutlineClipboardList className='fs-4' />,
              label: 'Enquiries',
            },
          ]}
        />
      </Sider>
      <Layout className='site-layout'>
        <Header
          className='d-flex justify-content-between pe-5'
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          <div className='d-flex gap-4 align-items-center'>
            <div className='position-relative'>
              <IoNotifications className='fs-4' />
              <span className='badge bg-warning rounded-circle p-1 position-absolute'>3</span>
            </div>
            <div className='d-flex gap-3 align-items-center'>
              <MdOutlineAccountCircle size={42} />
              <div className='d-flex flex-column'>
                <h5 className='fs-5 m-0 '>Admin</h5>
                <p className='m-0 lh-sm'>admin@email.com</p>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
export default MainLayout
