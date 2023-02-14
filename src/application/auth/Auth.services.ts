import { axios } from 'shared/lib';
import { createAsyncThunk } from '@reduxjs/toolkit'

export const controller_services = createAsyncThunk('auth/path', async() => {
  try {
    const res = await axios.get('link')
    return res
  } catch(err) {
    return err
  }
})