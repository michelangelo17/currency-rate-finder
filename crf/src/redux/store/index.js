import { configureStore } from '@reduxjs/toolkit'
import currencyReducer from '../slices/currencySlice'
import locationReducer from '../slices/locationSlice'

const store = configureStore({
  reducer: {
    currency: currencyReducer,
    location: locationReducer,
  },  
})

export default store
