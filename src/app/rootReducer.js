import { combineReducers } from '@reduxjs/toolkit'
import auth from './auth'
import blog from './blog'
import brand from './brand'
import categoriesBlog from './categoriesBlog'
import categoriesProduct from './categoriesProduct'

const rootReducer = () => (state, action) => {
  const combinedReducer = combineReducers({
    auth,
    brand,
    blog,
    categoriesProduct,
    categoriesBlog,
  })
  return combinedReducer(state, action)
}

export default rootReducer
