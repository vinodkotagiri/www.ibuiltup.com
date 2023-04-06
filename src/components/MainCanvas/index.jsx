import React, { useState } from 'react'
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/outline'
import MainInputMenu from '../MainInputMenu'
import Plot from '../Plot'
import { useSelector } from 'react-redux'
export default function MainCanvas({ isSiderOpen }) {
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  const { plot_length, plot_breadth } = useSelector((state) => state.data)
  return (
    <main
      className={`absolute ${
        isSiderOpen ? 'left-[400px]' : 'left-0'
      } ease-in-out duration-700 p-2 w-full h-full bg-slate-300 flex items-center justify-center`}>
      <div className='absolute top-0 left-0'>
        {!isMenuOpen ? (
          <Bars4Icon
            className='w-10 text-lime-700 cursor-pointer hover:scale-110 ease-in-out duration-500'
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
        ) : (
          <XMarkIcon
            className='w-10 text-lime-700 cursor-pointer hover:scale-110 ease-in-out duration-500'
            onClick={() => setIsMenuOpen((prev) => !prev)}
          />
        )}
      </div>
      <MainInputMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {plot_length && plot_breadth && <Plot />}
    </main>
  )
}
