import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBrandProduct } from '../../services/ProductService'

const initialdata = {
  loading: false,
  data: [],
}

const initialForm = {
  title: '',
}

export const getBrandApi = createAsyncThunk('getBrand', async (param) => {
  const resp = await getBrandProduct(param)
  return resp.data
})

export const brandSlice = createSlice({
  name: 'brand',
  initialState: {
    list: initialdata,
    form: initialForm,
    isEdit: false,
  },
  reducers: {
    setFormBrand: (state, action) => {
      state.form = action.payload.data
      state.isEdit = action.payload.isEdit
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBrandApi.pending, (state) => {
        state.list.loading = true
        state.list.data = []
      })
      .addCase(getBrandApi.fulfilled, (state, action) => {
        state.list.data = action.payload
        state.list.loading = false
      })
      .addCase(getBrandApi.rejected, (state) => {
        state.list.loading = false
        state.list.data = []
      })
  },
})

export const { setFormBrand } = brandSlice.actions

export default brandSlice.reducer
