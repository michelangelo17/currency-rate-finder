import { createSlice } from '@reduxjs/toolkit'
import Axios from 'axios'

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    isLoading: false,
    userLocation: null,
    error: null,
  },
  reducers: {
    setLocationLoadingToTrue(state) {
      state.isLoading = true
    },
    setLocation(state, action) {
      state.userLocation = action.payload
      state.isLoading = false
      state.error = null
    },
    setLocationError(state, action) {
      state.error = action.payload
      state.isLoading = false
    },
  },
})

export const {
  setLocationLoadingToTrue,
  setLocation,
  setLocationError,
} = locationSlice.actions

export default locationSlice.reducer

// API Thunks must be defined outside the slice object

export const getLocation = () => dispatch => {
  dispatch(setLocationLoadingToTrue())
  Axios.get(`https://ipapi.co/country_name/`)
    .then(res => dispatch(setLocation(res.data)))
    .catch(err => dispatch(setLocationError(`${err}`)))
}
