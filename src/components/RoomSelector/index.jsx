import React from 'react'
export default function RoomSelector({ room, isAdded, setIsAdded }) {
  return (
    <div className='text-xs font-semibold flex gap-1 items-center w-[140px] '>
      <input
        type='checkbox'
        className='cursor-pointer accent-lime-700 '
        checked={isAdded}
        onChange={() => setIsAdded((prev) => !isAdded)}
      />
      <label>{room.label}</label>
    </div>
  )
}
