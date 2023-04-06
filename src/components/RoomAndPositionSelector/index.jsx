import React, { useState } from 'react'
import { RoomSelector, PositionSelector, RoomControls } from '../'
import { useDispatch } from 'react-redux'

export default function RoomAndPositionSelector({ room }) {
  const [editingPosition, setEditingPosition] = useState(null)
  const [isRoomAdded, setIsRoomAdded] = useState(false)
  console.log('Editing details: ' + JSON.stringify({ position: editingPosition, room: room.id }))
  return (
    <div>
      <div className='flex w-full'>
        <div className='flex w-full gap-3'>
          {/* ROOM SELECTOR  */}
          <RoomSelector room={room} isAdded={isRoomAdded} setIsAdded={setIsRoomAdded} />
          {/* POSITION SELECTOR */}
          {isRoomAdded && (
            <PositionSelector room={room} editingPosition={editingPosition} setEditingPosition={setEditingPosition} />
          )}
        </div>
      </div>
      {editingPosition && isRoomAdded && <RoomControls room={room} editingPosition={editingPosition} />}
    </div>
  )
}
