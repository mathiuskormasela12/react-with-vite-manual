// ========= Like Slice
// import all packages
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0
}

const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    setLike (state, action) {
      state.value = action.payload
    }
  }
})

export const { setLike } = likeSlice.actions
export default likeSlice.reducer
