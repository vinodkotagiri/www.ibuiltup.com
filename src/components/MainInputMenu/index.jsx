import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { setBhk, setBuiltDimensions, setFacing, setPlotDimensions, setSetBacks } from '../../redux/features/data'

export default function MainInputMenu({ isMenuOpen, setIsMenuOpen }) {
  const [currentfacing, setCurrentfacing] = useState(null)
  const [currentBhk, setCurrentBhk] = useState(null)
  const [currentPlotDimensions, setCurrentPlotDimensions] = useState({ length: null, breadth: null })
  const [currentBuiltDimensions, setCurrentBuiltDimensions] = useState({ length: null, breadth: null })
  const [currentSetbacks, setCurrentSetbacks] = useState({ front: 4.5, back: 1.5, left: 1.5, right: 1.5 })
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    setCurrentBuiltDimensions(calculateBuiltDimensions(currentPlotDimensions, currentSetbacks))
  }, [currentPlotDimensions, currentSetbacks])

  const handleGeneratePlan = () => {
    if (
      currentBhk &&
      currentfacing &&
      currentPlotDimensions.length &&
      currentPlotDimensions.breadth &&
      currentBuiltDimensions.length &&
      currentBuiltDimensions.breadth
    ) {
      dispatch(setFacing({ facing: currentfacing }))
      dispatch(setBhk({ bhk: currentBhk }))
      dispatch(
        setPlotDimensions({ plot_length: currentPlotDimensions.length, plot_breadth: currentPlotDimensions.breadth })
      )
      dispatch(
        setBuiltDimensions({
          built_length: currentBuiltDimensions.length,
          built_breadth: currentBuiltDimensions.breadth
        })
      )
      dispatch(setSetBacks({ ...currentSetbacks }))
      setIsMenuOpen((prev) => !prev)
    } else {
      setError(true)
      toast.error('All inputs are required!')
      setTimeout(() => {
        setError(false)
      }, [3000])
    }
  }

  const calculateBuiltDimensions = (plotDimensions, setbacks) => {
    const { length, breadth } = plotDimensions
    const { front, back, left, right } = setbacks
    const built_length = (parseFloat(length) - parseFloat(left) - parseFloat(right)).toFixed(2)
    const built_breadth = (parseFloat(breadth) - parseFloat(front) - parseFloat(back)).toFixed(2)
    return { length: built_length, breadth: built_breadth }
  }

  return (
    <div
      className={`absolute z-50 border-2 border-lime-700 shadow-lg shadow-lime-700  left-1/3 px-4 py-6 rounded-md flex flex-col gap-3 bg-white  w-[780px] h-[340px]  ${
        !isMenuOpen ? 'top-[-360px]' : 'top-[32px]'
      } ${error ? 'animate-bounce bg-gradient-to-br from-red-500 to-stone-500 ' : 'bg-white'}ease-in-out duration-700`}>
      {/* DIMENSIONS */}
      <div className='flex gap-3 w-full justify-between'>
        <div className=' h-12 flex items-center justify-center rounded-md overflow-hidden'>
          <div className='bg-lime-700 w-[120px] h-full items-center flex px-6 text-slate-200 font-semibold'>Length</div>
          <input
            className='flex-1 outline-none border-[1px] border-lime-500 h-full px-6 text-lime-700 rounded-r-md placeholder:text-lime-700'
            placeholder='Length in ft'
            onChange={(e) => setCurrentPlotDimensions({ ...currentPlotDimensions, length: e.target.value })}
          />
        </div>
        <div className='h-12 flex items-center justify-center rounded-md overflow-hidden'>
          <div className='bg-lime-700 w-[120px] h-full items-center flex px-6 text-slate-200 font-semibold'>
            Breadth
          </div>
          <input
            className='flex-1 outline-none border-[1px] border-lime-700 h-full px-6 text-lime-500 rounded-r-md placeholder:text-lime-700'
            placeholder='Breadth in ft'
            onChange={(e) => setCurrentPlotDimensions({ ...currentPlotDimensions, breadth: e.target.value })}
          />
        </div>
      </div>
      {/* FACING AND BHK */}
      <div className='flex gap-3 w-full justify-between'>
        <div className='w-1/2 h-12 flex items-center justify-center rounded-md overflow-hidden'>
          <div className='bg-lime-700 w-[120px] h-full items-center flex px-6 text-slate-200 font-semibold'>Facing</div>
          <select
            className='flex-1 outline-none border-[1px] border-lime-700 h-full px-6 text-xl text-lime-700 rounded-r-md cursor-pointer'
            onChange={(e) => setCurrentfacing(e.target.value)}>
            <option value={null}>Select Facing</option>
            <option value='SOUTH'>SOUTH</option>
            <option value='NORTH'>NORTH</option>
            <option value='WEST'>WEST</option>
            <option value='EAST'>EAST</option>
          </select>
        </div>
        <div className='w-1/2 h-12 flex items-center justify-center rounded-md overflow-hidden'>
          <div className='bg-lime-700 w-[120px] h-full items-center flex px-6 text-slate-200 font-semibold'>BHK</div>
          <select
            className='flex-1 outline-none border-[1px] border-lime-700 h-full px-6 text-xl text-lime-700 rounded-r-md cursor-pointer'
            onChange={(e) => setCurrentBhk(e.target.value)}>
            <option value={null}>Select BHK</option>
            <option value='1'>1 BHK</option>
            <option value='2'>2 BHK</option>
            <option value='3'>3 BHK</option>
            <option value='4'>4 BHK</option>
          </select>
        </div>
      </div>
      {/* SETBACKS */}
      <div className='flex gap-3 w-full justify-between'>
        <div className=' h-12 flex items-center justify-center rounded-md overflow-hidden'>
          <div className='bg-lime-700 w-[120px] h-full items-center flex px-6 text-slate-200 font-semibold'>
            Setbacks
          </div>
          <input
            className='outline-none border-[1px] w-1/4 border-lime-700 h-full px-6 text-lime-700 placeholder:text-lime-700'
            placeholder='Front'
            onChange={(e) => setCurrentSetbacks({ ...currentSetbacks, front: e.target.value })}
          />
          <input
            className='outline-none border-[1px] w-1/4 border-lime-700 h-full px-6 text-lime-700 placeholder:text-lime-700'
            placeholder='Back'
            onChange={(e) => setCurrentSetbacks({ ...currentSetbacks, back: e.target.value })}
          />
          <input
            className='outline-none border-[1px] w-1/4 border-lime-700 h-full px-6 text-lime-700 placeholder:text-lime-700'
            placeholder='Left'
            onChange={(e) => setCurrentSetbacks({ ...currentSetbacks, left: e.target.value })}
          />
          <input
            className='outline-none border-[1px] w-1/4 border-lime-700 h-full px-6 text-lime-700 placeholder:text-lime-700'
            placeholder='Right'
            onChange={(e) => setCurrentSetbacks({ ...currentSetbacks, right: e.target.value })}
          />
        </div>
      </div>
      <div className='flex items-center justify-between w-full my-4 px-10 pt-10'>
        <button
          className='bg-slate-700 text-slate-200 font-semibold py-3 px-8 rounded-md hover:scale-110 duration-500'
          onClick={() => setIsMenuOpen((prev) => !prev)}>
          Cancel
        </button>
        <button
          className='bg-lime-700 text-slate-200 font-semibold py-3 px-8 rounded-md hover:scale-110 duration-500'
          onClick={handleGeneratePlan}>
          Generate Plan
        </button>
      </div>
    </div>
  )
}
