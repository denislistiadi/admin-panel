import { createSlice } from '@reduxjs/toolkit'

export const initialUser = {
  foto: '',
  nama: '',
  email: '',
  telepon: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
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
})

export const { setLogged, setUser } = authSlice.actions

export default authSlice.reducer
