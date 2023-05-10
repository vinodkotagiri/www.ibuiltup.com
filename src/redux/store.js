import { configureStore } from '@reduxjs/toolkit'
import plotReducer from './features/plotSlice'
export const store = configureStore({
  reducer: {
    plot: plotReducer
  }
})
