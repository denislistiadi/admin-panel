import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './components/Layout/MainLayout'

const Login = React.lazy(() => import('./pages/auth/Login'))
const ResetPassword = React.lazy(() => import('./pages/auth/ResetPassword'))
const ForgotPassword = React.lazy(() => import('./pages/auth/ForgotPassword'))
const Dashboard = React.lazy(() => import('./pages/dashboard'))
const Customer = React.lazy(() => import('./pages/customer'))
const Product = React.lazy(() => import('./pages/product'))
const Blog = React.lazy(() => import('./pages/blog'))
const Brand = React.lazy(() => import('./pages/brand'))
const Category = React.lazy(() => import('./pages/category'))
const Color = React.lazy(() => import('./pages/color'))
const Enquiries = React.lazy(() => import('./pages/enquiries'))
const Order = React.lazy(() => import('./pages/orders'))

function App() {
  return (
    <Suspense
      fallback={
        <div className='vh-100 vw-100 d-flex align-items-center justify-content-center'>
          <div className='spinner-border text-dark' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div>
      }
    >
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/admin' element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='customers' element={<Customer />} />
          <Route path='product-list' element={<Product />} />
          <Route path='blog-list' element={<Blog />} />
          <Route path='brand' element={<Brand />} />
          <Route path='category-list' element={<Category />} />
          <Route path='color-list' element={<Color />} />
          <Route path='enquiries' element={<Enquiries />} />
          <Route path='orders' element={<Order />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
