import React, { useState } from 'react'
import { Sider, MainCanvas } from '../../components'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useSelector } from 'react-redux'
export default function Drawing() {
  const [isSiderOpen, setIsSiderOpen] = useState(false)
  const { plot_length, plot_breadth } = useSelector((state) => state.data)
  return (
    <div className='w-full h-full flex '>
      {plot_length && plot_breadth && (
        <button
          className={`absolute top-1/2  bg-lime-700 h-[90px] rounded-r-lg opacity-80 ${
            isSiderOpen ? 'left-[400px]' : 'left-0'
          } ease-in-out duration-700 z-50`}>
          {isSiderOpen ? (
            <ChevronLeftIcon
              className='w-6 animate-bounce ease-in-out duration-700'
              onClick={() => setIsSiderOpen((prev) => !prev)}
            />
          ) : (
            <ChevronRightIcon className='w-6 animate-bounce' onClick={() => setIsSiderOpen((prev) => !prev)} />
          )}
        </button>
      )}
      {/* SIDER */}
      <Sider open={isSiderOpen} />
      {/* MAIN CANVAS */}
      <MainCanvas isSiderOpen={isSiderOpen} />
    </div>
  )
}
