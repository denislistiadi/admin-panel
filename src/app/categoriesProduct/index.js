import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCategoriesProduct } from '../../services/ProductService'

const initialdata = {
  loading: false,
  data: [],
}

const initialForm = {
  title: '',
}

export const getCategoriesProductApi = createAsyncThunk('getCategoriesProduct', async (param) => {
  const resp = await getCategoriesProduct(param)
  return resp.data
})

export const categoriesProductSlice = createSlice({
  name: 'categoriesProduct',
  initialState: {
    list: initialdata,
    form: initialForm,
    isEdit: false
  },
  reducers: {
    setFormCategoriesProduct: (state, action) => {
      state.form = action.payload.data
      state.isEdit = action.payload.isEdit
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesProductApi.pending, (state) => {
        state.list.loading = true
        state.list.data = []
      })
      .addCase(getCategoriesProductApi.fulfilled, (state, action) => {
        state.list.data = action.payload
        state.list.loading = false
      })
      .addCase(getCategoriesProductApi.rejected, (state) => {
        state.list.loading = false
        state.list.data = []
      })
  },
})

export const { setFormCategoriesProduct, setUser } = categoriesProductSlice.actions

export default categoriesProductSlice.reducer
