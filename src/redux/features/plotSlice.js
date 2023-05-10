import { createSlice } from '@reduxjs/toolkit'
const plotSlice = createSlice({
  name: 'plot',
  initialState: {
    length: 0,
    breadth: 0,
    scale: 20,
    facing: '',
    type: '',
    area: 0,
    setbacks: {
      left: 1.5,
      right: 1.5,
      front: 4.5,
      back: 4.5
    },
    builtup: {
      length: 0,
      breadth: 0,
      area: 0
    }
  },
  reducers: {
    setPlotDimensions: (state, action) => {
      const { length, breadth } = action.payload
      const area = parseFloat((parseFloat(length) * parseFloat(breadth)).toFixed(2))
      return { ...state, length: parseFloat(length), breadth: parseFloat(breadth), area }
    },
    setSetBacks: (state, action) => {
      const { left, right, front, back } = action.payload
      return { ...state, setbacks: { left: parseFloat(left), right: parseFloat(right), front: parseFloat(front), back: parseFloat(back) } }
    },
    calculateBuiltup: (state) => {
      const builtLength = (state.length - state.setbacks.left - state.setbacks.right).toFixed(2)
      const builtBreadth = (state.breadth - state.setbacks.front - state.setbacks.back).toFixed(2)
      const builtArea = (builtBreadth * builtLength).toFixed(2)
      return { ...state, builtup: { length: parseFloat(builtLength), breadth: parseFloat(builtBreadth), area: parseFloat(builtArea) } }
    },
    setPlotFacing: (state, action) => {
      return { ...state, facing: action.payload.facing }
    },
    setPlotType: (state, action) => {
      return { ...state, type: action.payload.type }
    }
  }
})
export const { setPlotDimensions, setSetBacks, calculateBuiltup, setPlotType, setPlotFacing } = plotSlice.actions
export default plotSlice.reducer
