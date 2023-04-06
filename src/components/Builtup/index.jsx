import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Wall from '../Wall'

export default function Builtup() {
  const { built_length, built_breadth, scale, setbacks } = useSelector((state) => state.data)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  useEffect(() => {
    const w = Math.ceil(parseFloat(built_length) * parseInt(scale))
    const h = Math.ceil(parseFloat(built_breadth) * parseInt(scale))
    const t = Math.ceil(parseFloat(setbacks.back) * parseInt(scale))
    const l = Math.ceil(parseFloat(setbacks.left) * parseInt(scale))
    setWidth(w)
    setHeight(h)
    setTop(t)
    setLeft(l)
  }, [scale, built_breadth, built_length, setbacks])

  return (
    <div className=' bg-white shadow-lime-700 shadow-2xl absolute' style={{ width, height, top, left }}>
      {/* outerwalls */}
      {/* FRONT WALL */}
      <Wall length={built_length} thickness={0.75} side='FRONT' />
      {/* BACK WALL */}
      <Wall length={built_length} thickness={0.75} side='BACK' />
      {/* LEFT WALL */}
      <Wall length={built_breadth} thickness={0.75} side='LEFT' />
      {/* RIGHT WALL */}
      <Wall length={built_breadth} thickness={0.75} side='RIGHT' />
    </div>
  )
}
