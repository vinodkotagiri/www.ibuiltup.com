import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Builtup from '../Builtup'
import Wall from '../Wall'

export default function Plot() {
  const { plot_length, plot_breadth, scale } = useSelector((state) => state.data)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  useEffect(() => {
    const w = Math.ceil(parseFloat(plot_length) * parseInt(scale))
    const h = Math.ceil(parseFloat(plot_breadth) * parseInt(scale))
    setWidth(w)
    setHeight(h)
  }, [scale, plot_breadth, plot_length])

  return (
    <div className=' bg-slate-400 shadow-lime-700 shadow-2xl relative' style={{ width, height }}>
      <Builtup />
    </div>
  )
}
