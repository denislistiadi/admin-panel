import { combineReducers } from '@reduxjs/toolkit'
import auth from './auth'
import categoriesProduct from './categoriesProduct'
import brand from './brand'
import categoriesBlog from './categoriesBlog'

const rootReducer = () => (state, action) => {
  const combinedReducer = combineReducers({
    auth,
    categoriesProduct,
    brand,
    categoriesBlog,
  })
  return combinedReducer(state, action)
}

export default rootReducer
