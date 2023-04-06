import React from 'react'
import { ArrowsUpDownIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline'
export default function index() {
  return (
    <div className='flex  flex-col '>
      <div className='w-full flex my-2 gap-3'>
        <div className='w-1/2 flex gap-2 justify-between items-center'>
          <ArrowsRightLeftIcon className='w-4 text-blue-800 cursor-pointer' />
          <input type='range' className='accent-lime-700' />
        </div>
        <div className='w-1/2 flex gap-2 justify-between items-center'>
          <ArrowsUpDownIcon className='w-4 text-blue-800 cursor-pointer' />
          <input type='range' className='accent-lime-700' />
        </div>
      </div>
      <div className='w-full flex my-2 gap-3'>
        <div className='w-1/2 flex gap-2 justify-between items-center'>
          <label className='font-semibold'>L</label>
          <input type='range' className='accent-lime-700' />
        </div>
        <div className='w-1/2 flex gap-2 justify-between items-center'>
          <label className='font-semibold'>B</label>
          <input type='range' className='accent-lime-700' />
        </div>
      </div>
    </div>
  )
}
