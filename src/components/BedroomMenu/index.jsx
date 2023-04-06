import React from 'react'
import BathControls from '../BathControls'
import RoomExtraControls from '../RoomExtraControls'
export default function BedroomMenu() {
  return (
    <div className='flex flex-col gap-3 my-2 p-2 bg-slate-200 rounded-md '>
      {/* BATH CONTROLS */}
      <BathControls />
      {/* EXTRA CONTROLS */}
      <RoomExtraControls />
    </div>
  )
}
