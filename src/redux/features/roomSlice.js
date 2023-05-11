import { createSlice } from '@reduxjs/toolkit'
const roomSlice = createSlice({
  name: 'room',
  initialState: {
    rooms: [],
    selectedRoom: {}
  },
  reducers: {
    addRoom: (state, action) => {
      state.rooms.push(JSON.parse(action.payload.room))
    }
  }
})
export const { addRoom } = roomSlice.actions
export default roomSlice.reducer
