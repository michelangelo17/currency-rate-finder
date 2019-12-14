import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import currencyReducer from '../slices/currencySlice'
import locationReducer from '../slices/locationSlice'

const store = configureStore({
  reducer: {
    currency: currencyReducer,
    location: locationReducer,
  },
  middleware: [...getDefaultMiddleware(), logger],
})

export default store
