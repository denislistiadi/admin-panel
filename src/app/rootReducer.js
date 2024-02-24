import { combineReducers } from '@reduxjs/toolkit'
import auth from './auth'

const rootReducer = () => (state, action) => {
  const combinedReducer = combineReducers({
    auth,
  })
  return combinedReducer(state, action)
}

export default rootReducer
