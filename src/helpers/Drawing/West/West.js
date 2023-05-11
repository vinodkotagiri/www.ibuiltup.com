import Room from '../../Room/Room'
import { store } from '../../../redux/store'
import { addRoom } from '../../../redux/features/roomSlice'
export function generateWestFacing() {
  const state = store.getState()
  const { length, breadth, scale, builtup } = state.plot
  const builtLength = builtup.length
  const builtBreadth = builtup.breadth
  const rooms = []
  if (length <= breadth) {
    if (breadth >= 15 && breadth < 24) {
      const bedroom1 = new Room('bedroom-1')
      bedroom1.updateDimensions(builtLength, builtBreadth * 0.55)
      bedroom1.updatePosition({ top: 0, left: 0 })
      bedroom1.updateWallDimensions('front', { length: builtLength, thickness: 6 })
      bedroom1.updateWallDimensions('left', { length: builtBreadth * 0.55, thickness: 6 })
      const room1 = JSON.stringify(bedroom1)
      store.dispatch(addRoom({ room: room1 }))
      const toilet1 = new Room('toilet-1')
      toilet1.updateDimensions(builtLength * 0.35, builtBreadth * 0.4)
      toilet1.updatePosition({ bottom: 0, left: 0 })
      toilet1.updateWallDimensions('front', { length: builtLength * 0.35, thickness: 6 })
      toilet1.updateWallDimensions('right', { length: builtBreadth * 0.4, thickness: 6 })
      const room2 = JSON.stringify(toilet1)
      store.dispatch(addRoom({ room: room2 }))
      const living1 = new Room('living-1')
      living1.updateDimensions(builtLength * 0.55, builtBreadth * 0.45)
      living1.updatePosition({ bottom: 0, right: 0 })
      const room3 = JSON.stringify(living1)
      store.dispatch(addRoom({ room: room3 }))
    }
  }
}
