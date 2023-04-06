import React from 'react'
import { PencilSquareIcon } from '@heroicons/react/24/outline'
import PositionControls from '../PositionControls'
export default function index() {
  return (
    <div className='flex flex-col border-[1px] border-lime-700 p-2 rounded-md shadow-lg'>
      <div className='font-semibold'>Bath selection</div>
      <div className='flex w-full gap-3 justify-start items-center'>
        <div className='flex items-center gap-1 justify-center'>
          <input type='radio' name='bath-type' className='accent-lime-700 outline-none cursor-pointer' defaultChecked />
          <label>None</label>
        </div>
        <div className='flex items-center gap-1 justify-center'>
          <input type='radio' name='bath-type' className='accent-lime-700 outline-none cursor-pointer' />
          <label>WC only</label>
        </div>
        <div className='flex items-center gap-1 justify-center'>
          <input type='radio' name='bath-type' className='accent-lime-700 outline-none cursor-pointer' />
          <label>Half Bath</label>
        </div>
        <div className='flex items-center gap-1 justify-center'>
          <input type='radio' name='bath-type' className='accent-lime-700 outline-none cursor-pointer' />
          <label>Full Bath</label>
        </div>
        <PencilSquareIcon className='w-4 text-blue-800 cursor-pointer' />
      </div>
      <PositionControls />
      {/* <DimensionsControls /> */}
    </div>
  )
}
