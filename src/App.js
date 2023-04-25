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
import AddBlog from './pages/blogs/AddBlog'
import AddBlogCategory from './pages/blogCategory/AddBlogCategory'
import AddColor from './pages/colors/AddColor'
import AddCategory from './pages/productCategory/AddCategory'
import AddBrand from './pages/brands/AddBrand'
import AddProduct from './pages/products/AddProduct'

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
        <Route path='add-blog' element={<AddBlog />} />
        <Route path='blog-category' element={<BlogCategory />} />
        <Route path='add-blog-category' element={<AddBlogCategory />} />
        <Route path='orders' element={<Orders />} />
        <Route path='product-list' element={<ProductList />} />
        <Route path='add-product' element={<AddProduct />} />
        <Route path='brand' element={<BrandList />} />
        <Route path='add-brand' element={<AddBrand />} />
        <Route path='category' element={<Categories />} />
        <Route path='add-category' element={<AddCategory />} />
        <Route path='color' element={<ColorList />} />
        <Route path='add-color' element={<AddColor />} />
        <Route path='customers' element={<Customers />} />
      </Route>
    </Routes>
  )
}

export default App
