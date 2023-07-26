// ========= Store
// import all packages
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, PERSIST, PAUSE, PURGE, REGISTER, REHYDRATE, FLUSH } from 'redux-persist'
import rootReducer from './features'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST, PAUSE, PURGE, REGISTER, REHYDRATE, FLUSH]
      }
    }))
})

export const persistor = persistStore(store)
