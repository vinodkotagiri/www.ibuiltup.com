import { configureStore } from '@reduxjs/toolkit'
import plotReducer from './features/plotSlice'
import roomReducer from './features/roomSlice'
export const store = configureStore({
  reducer: {
    plot: plotReducer,
    room: roomReducer
  }
})
