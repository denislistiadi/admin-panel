import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCategoriesBlog } from '../../services/BlogService'

const initialdata = {
  loading: false,
  data: [],
}

const initialForm = {
  title: '',
}

export const getCategoriesBlogApi = createAsyncThunk('getCategoriesBlog', async (param) => {
  const resp = await getCategoriesBlog(param)
  return resp.data
})

export const categoriesBlogSlice = createSlice({
  name: 'categoriesBlog',
  initialState: {
    list: initialdata,
    form: initialForm,
    isEdit: false,
  },
  reducers: {
    setFormCategoriesBlog: (state, action) => {
      state.form = action.payload.data
      state.isEdit = action.payload.isEdit
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesBlogApi.pending, (state) => {
        state.list.loading = true
        state.list.data = []
      })
      .addCase(getCategoriesBlogApi.fulfilled, (state, action) => {
        state.list.data = action.payload
        state.list.loading = false
      })
      .addCase(getCategoriesBlogApi.rejected, (state) => {
        state.list.loading = false
        state.list.data = []
      })
  },
})

export const { setFormCategoriesBlog } = categoriesBlogSlice.actions

export default categoriesBlogSlice.reducer
