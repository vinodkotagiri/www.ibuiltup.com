import React, { useEffect } from 'react'
import Submenu from '../Submenu'
import { useDispatch } from 'react-redux'
import { setEditingRoom } from '../../redux/features/data'

export default function RoomControls({ room, editingPosition }) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setEditingRoom({ room: room.id, position: editingPosition }))
  }, [room, editingPosition])
  return (
    <div className='w-full border-[1px] border-lime-500 my-2  p-2 text-xs rounded-md shadow-2xl'>
      <label className='font-bold  text-slate-800'>
        Editing :
        <span className='text-lime-800'>
          <span className='animate-pulse'> {room.label}</span> /{' '}
          <span className='animate-pulse'>{editingPosition}</span>
        </span>
      </label>
      <Submenu room={room} />
    </div>
  )
}
