// ========= Root Reducer
// import all packages
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'

// import all slices
import likeSlice from './like.slice'
import dislikeSlice from './dislike.slice'

const rootPersistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['dislikeReducer']
}

const rootReducer = combineReducers({
  likeReducer: likeSlice,
  dislikeReducer: dislikeSlice
})

export default persistReducer(rootPersistConfig, rootReducer)
