import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Room from '../Room/Room'
import { generateWestFacing } from '../../helpers/Drawing/West/West'
export default function Builtup() {
  const { builtup, scale, setbacks, facing } = useSelector((state) => state.plot)
  const { rooms } = useSelector((state) => state.room)
  const { length, breadth } = builtup
  const { back, left } = setbacks
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [position, setPosition] = useState({})
  useEffect(() => {
    setWidth(length * scale)
    setHeight(breadth * scale)
    setPosition({ top: back * scale, left: left * scale })
  }, [length, breadth, scale, rooms])
  useEffect(() => {
    if (facing === 'W') {
      generateWestFacing()
    }
  }, [facing])

  return (
    <div className='border-2 absolute shadow-lg' style={{ width, height, ...position }}>
      {rooms.map((room, index) => (
        <Room key={index} id={room.id} />
      ))}
    </div>
  )
}
