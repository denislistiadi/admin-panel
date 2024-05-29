import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBlogApi } from '../../services/BlogService'

const initialdata = {
  loading: false,
  data: [],
}

const initialForm = {
  title: '',
}

export const fetchBlogApi = createAsyncThunk('getBlog', async (param) => {
  const resp = await getBlogApi(param)
  return resp.data
})

export const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    list: initialdata,
    form: initialForm,
    isEdit: false,
  },
  reducers: {
    setFormBlog: (state, action) => {
      state.form = action.payload.data
      state.isEdit = action.payload.isEdit
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogApi.pending, (state) => {
        state.list.loading = true
        state.list.data = []
      })
      .addCase(fetchBlogApi.fulfilled, (state, action) => {
        state.list.data = action.payload
        state.list.loading = false
      })
      .addCase(fetchBlogApi.rejected, (state) => {
        state.list.loading = false
        state.list.data = []
      })
  },
})

export const { setFormBlog } = blogSlice.actions

export default blogSlice.reducer
