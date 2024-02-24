import { combineReducers } from '@reduxjs/toolkit'
import auth from './auth'
import categoriesProduct from './categoriesProduct'

const rootReducer = () => (state, action) => {
  const combinedReducer = combineReducers({
    auth,
    categoriesProduct,
  })
  return combinedReducer(state, action)
}

export default rootReducer
