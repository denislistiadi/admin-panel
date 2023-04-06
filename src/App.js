import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './components/Layout/MainLayout'
import Enquiries from './pages/enquiries'
import Dashboard from './pages/dashboard'
import ForgotPassword from './pages/auth/ForgotPassword'
import Login from './pages/auth/Login'
import ResetPassword from './pages/auth/ResetPassword'
import Customers from './pages/customers'
import BlogList from './pages/blogs'
import BlogCategory from './pages/blogCategory'
import Orders from './pages/orders'
import Categories from './pages/productCategory'
import ColorList from './pages/colors'
import ProductList from './pages/products'
import BrandList from './pages/brands'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/reset-password' element={<ResetPassword />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/admin' element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='enquiries' element={<Enquiries />} />
        <Route path='blog-list' element={<BlogList />} />
        <Route path='blog-category' element={<BlogCategory />} />
        <Route path='orders' element={<Orders />} />
        <Route path='product-list' element={<ProductList />} />
        <Route path='brand' element={<BrandList />} />
        <Route path='category' element={<Categories />} />
        <Route path='color' element={<ColorList />} />
        <Route path='customers' element={<Customers />} />
      </Route>
    </Routes>
  )
}

export default App
