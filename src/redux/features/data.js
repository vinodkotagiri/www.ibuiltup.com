import { createSlice } from '@reduxjs/toolkit'
const dataSlice = createSlice({
  name: 'data',
  initialState: {
    bhk: 2,
    facing: 'SOUTH',
    scale: 20,
    // plot dimensions
    plot_length: null,
    plot_breadth: null,
    plot_area: null,

    // built dimensions
    built_length: null,
    built_breadth: null,
    built_area: null,

    // setbacks
    setbacks: {
      left: null,
      right: null,
      front: null,
      back: null
    },

    addedRooms: [],
    editingRoom: {}
  },
  reducers: {
    // set facing
    setFacing: (state, action) => {
      const { facing } = action.payload
      return { ...state, facing }
    },
    // set BHK
    setBhk: (state, action) => {
      const { bhk } = action.payload
      return { ...state, bhk }
    },
    //set plot dimensions
    setPlotDimensions: (state, action) => {
      const { plot_length, plot_breadth } = action.payload
      const plot_area = (parseFloat(plot_length) * parseFloat(plot_breadth)).toFixed(2)
      return { ...state, plot_length, plot_breadth, plot_area }
    },
    //set builtup dimensions
    setBuiltDimensions: (state, action) => {
      const { built_length, built_breadth } = action.payload
      const built_area = (parseFloat(built_length) * parseFloat(built_breadth)).toFixed(2)
      return { ...state, built_length, built_breadth, built_area }
    },
    //set setbacks
    setSetBacks: (state, action) => {
      const { left, right, front, back } = action.payload
      return { ...state, setbacks: { front, back, left, right } }
    },
    setEditingRoom: (state, action) => {
      return { ...state, editingRoom: action.payload }
    }
  }
})
export const { setFacing, setBhk, setPlotDimensions, setBuiltDimensions, setSetBacks, setEditingRoom } =
  dataSlice.actions
export default dataSlice.reducer
