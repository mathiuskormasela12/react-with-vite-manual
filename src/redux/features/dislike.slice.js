// ========= Dislike Slice
// import all packages
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0
}

const dislikeSlice = createSlice({
  name: 'dislike',
  initialState,
  reducers: {
    setDislike (state, action) {
      state.value = action.payload
    }
  }
})

export const { setDislike } = dislikeSlice.actions
export default dislikeSlice.reducer
