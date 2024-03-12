import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCustomersApi } from '../../services/AuthService'

export const initialUser = {
  foto: '',
  nama: '',
  email: '',
  telepon: '',
}

export const getCustomers = createAsyncThunk('getCustomers', async () => {
  const resp = await getCustomersApi()
  return resp.data
})

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    customers: { list: [], loading: false },
    logged: false,
    token: '',
    user: initialUser,
  },
  reducers: {
    setLogged: (state, action) => {
      state.logged = action.payload.logged
      state.token = action.payload.token
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCustomers.pending, (state) => {
        state.customers.loading = true
      })
      .addCase(getCustomers.fulfilled, (state, action) => {
        state.customers.loading = false
        state.customers.list = action.payload.getUsers
      })
  },
})

export const { setLogged, setUser } = authSlice.actions

export default authSlice.reducer
