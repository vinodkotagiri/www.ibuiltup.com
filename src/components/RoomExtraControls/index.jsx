import React from 'react'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import PositionControls from '../PositionControls'
export default function RoomExtraControls() {
  return (
    <div className='border-[1px] border-lime-700 p-2 rounded-md shadow-2xl'>
      <div className='font-semibold'>Extras</div>
      <div className='flex w-full gap-3 justify-start items-center'>
        <div className='flex items-center gap-1 justify-center'>
          <input type='checkbox' className='accent-lime-400 outline-none cursor-pointer' />
          <label>Wardrobe</label>
        </div>
        <div className='flex items-center gap-1 justify-center'>
          <input type='checkbox' className='accent-lime-400 outline-none cursor-pointer' />
          <label>Balcony</label>
        </div>
        <PencilSquareIcon className='w-4 text-blue-800 cursor-pointer' />
      </div>
      <PositionControls />
    </div>
  )
}
