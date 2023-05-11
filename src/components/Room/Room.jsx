import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Room(id) {
  const { rooms } = useSelector((state) => state.room)
  const { scale } = useSelector((state) => state.plot)
  const currentRoom = rooms.filter((rm) => rm.id === id.id)[0]
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [position, setPosition] = useState({})
  useEffect(() => {
    setWidth(currentRoom.length * scale)
    setHeight(currentRoom.breadth * scale)
    setPosition(currentRoom.position)
  }, [currentRoom])
  console.log(width, scale, currentRoom)
  return (
    <div className='bg-red-400 absolute shadow-lg border-2 flex items-center justify-center' style={{ width, height, ...position }}>
      <strong className='text-xs'>{currentRoom.id.split('-')[0].toString().toUpperCase()}</strong>
    </div>
  )
}
