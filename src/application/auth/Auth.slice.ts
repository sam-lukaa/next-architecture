import { createSlice } from '@reduxjs/toolkit'
import {controller_services} from './Auth.services'

interface iInitialState {
  error: string
  message: string
  loading: boolean
  data: Record<string, string | null | number>
}

const initialState: iInitialState = {
  data: {},
  error: '',
  message: '',
  loading: false,
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(controller_services.fulfilled, (state, { payload }: any) => {
      console.log(payload)
      state.data = payload.data
      state.loading = false
    })
    builder.addCase(controller_services.pending, (state) => {
      state.loading = true
    })
    builder.addCase(controller_services.rejected, (state, { error }: any) => {
      console.log(error)
      state.loading = false
    })
  }
})

export default AuthSlice.reducer;