import React, { useState } from 'react'
import { BsChevronDoubleLeft, BsChevronDoubleRight } from 'react-icons/bs'
import InputWithLabel from './InputWithLabel'
import { useDispatch } from 'react-redux'
import { calculateBuiltup, setPlotDimensions, setPlotFacing, setPlotType, setSetBacks } from '../../redux/features/plotSlice'
import { toast } from 'react-toastify'
export default function PlotInputs() {
  const [open, setOpen] = useState(false)
  const [length, setLength] = useState('')
  const [breadth, setBreadth] = useState('')
  const [right, setRight] = useState(1.5)
  const [left, setLeft] = useState(1.5)
  const [front, setFront] = useState(4.5)
  const [back, setBack] = useState(1.5)
  const [facing, setFacing] = useState('')
  const [bhk, setBhk] = useState('')
  const [error, setError] = useState({ error: false, msg: '' })
  const dispatch = useDispatch()

  const updatePlotData = () => {
    if (!length || !breadth) return toast.error('Plot dimesions are required!')
    if (length < 10 || breadth < 10) return toast.error('Plot dimesions should be above 10 ft')
    if (left < 0 || right < 0 || front < 0 || back < 0) return toast.error('setbacks mustbe positive')
    if (left >= 6 || right >= 6 || front >= 6 || back >= 6) return toast.error('setbacks mustbe lessthan 6 ft')
    if (!facing) return toast.error('Please select plot facing!')
    if (!bhk) return toast.error('Please select plot type!')
    if (length > 0 && breadth > 0) {
      dispatch(setPlotDimensions({ length, breadth }))
      dispatch(setSetBacks({ left, right, front, back }))
      dispatch(calculateBuiltup())
      dispatch(setPlotFacing({ facing }))
      dispatch(setPlotType({ type: bhk }))
    }
  }
  return (
    <header className='sticky top-0 left-0 h-14 w-full'>
      {/* MENU ICON */}
      {!open ? (
        <BsChevronDoubleLeft size={30} className='text-primaryLime animate-pulse cursor-pointer ease-in-out duration-300 absolute top-3 left-3 z-50' onClick={() => setOpen((prev) => !prev)} />
      ) : (
        <BsChevronDoubleRight size={30} className='text-slate-800 animate-pulse cursor-pointer ease-in-out duration-300 absolute top-3 left-3 z-50' onClick={() => setOpen((prev) => !prev)} />
      )}
      <div className={`w-full h-full bg-slate-800 flex items-center justify-center gap-3  px-14 z-40 absolute ease-linear duration-700  ${!open ? 'left-0' : '-left-full'}`}>
        {/* PLOT DIMENSIONS */}
        <div className='w-[2px] bg-lime-800 h-full' />
        <div className=' flex items-center gap-3'>
          <div className='text-sm font-semibold capitalize text-slate-300'>plot dimensions</div>
          <InputWithLabel label='length' type='dimensions' value={length} setValue={setLength} />
          <InputWithLabel label='breadth' type='dimensions' value={breadth} setValue={setBreadth} />
        </div>
        <div className='w-[2px] bg-lime-800 h-full' />
        {/* SETBACKS */}
        <div className=' flex items-center gap-3'>
          <div className='text-sm font-semibold capitalize text-slate-300'>setbacks</div>
          <InputWithLabel label='left' type='dimensions' value={left} setValue={setLeft} />
          <InputWithLabel label='right' type='dimensions' value={right} setValue={setRight} />
          <InputWithLabel label='front' type='dimensions' value={front} setValue={setFront} />
          <InputWithLabel label='back' type='dimensions' value={back} setValue={setBack} />
        </div>
        <div className='w-[2px] bg-lime-800 h-full' />
        {/* FACING */}
        <div className='text-sm font-semibold capitalize text-slate-300'>facing</div>
        <div className=' flex items-center gap-3'>
          <InputWithLabel label='facing' type='facing' value={facing} setValue={setFacing} />
        </div>
        <div className='w-[2px] bg-lime-800 h-full' />

        {/* BHK */}
        <div className='text-sm font-semibold capitalize text-slate-300'>Type</div>
        <div className=' flex items-center gap-3'>
          <InputWithLabel label='BHK' type='bhk' value={bhk} setValue={setBhk} />
        </div>
        <div className='w-[2px] bg-lime-800 h-full' />
        <div className='flex-1 flex items-center justify-center h-2/3'>
          <button className='bg-primaryLime h-full w-full rounded-lg font-bold text-xl text-slate-600 hover:scale-110 ease-in-out duration-300' onClick={() => updatePlotData()}>
            Go
          </button>
        </div>
      </div>
    </header>
  )
}
