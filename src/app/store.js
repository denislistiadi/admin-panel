import { configureStore } from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage'

import rootReducer from './rootReducer'

const middlewares = []

const persistConfig = {
  key: 'data',
  keyPrefix: '',
  storage,
  whitelist: ['auth'],
}

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer()),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middlewares),
  // eslint-disable-next-line no-undef
  devTools: process.env.NODE_ENV === 'development',
})

export const persistor = persistStore(store)

export default store
