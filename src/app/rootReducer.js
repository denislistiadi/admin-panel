import { combineReducers } from '@reduxjs/toolkit'
import auth from './auth'
import categoriesProduct from './categoriesProduct'
import brand from './brand'

const rootReducer = () => (state, action) => {
  const combinedReducer = combineReducers({
    auth,
    categoriesProduct,
    brand,
  })
  return combinedReducer(state, action)
}

export default rootReducer
