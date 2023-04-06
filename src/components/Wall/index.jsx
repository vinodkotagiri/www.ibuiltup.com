import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Wall({ thickness, length, side }) {
  const { scale } = useSelector((state) => state.data)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [position, setPosition] = useState({})
  useEffect(() => {
    let w,
      h,
      p = {}
    if (side === 'FRONT' || side === 'BACK') {
      w = Math.ceil(parseFloat(length) * parseInt(scale))
      h = Math.ceil(parseFloat(thickness) * parseInt(scale))
      if (side === 'FRONT') {
        p['bottom'] = 0
        p['left'] = 0
      } else {
        p['top'] = 0
        p['left'] = 0
      }
      setWidth(w)
      setHeight(h)
      setPosition(p)
    }
    if (side === 'LEFT' || side === 'RIGHT') {
      h = Math.ceil(parseFloat(length) * parseInt(scale) - 2 * parseFloat(thickness) * parseInt(scale))
      w = Math.ceil(parseFloat(thickness) * parseInt(scale))
      if (side === 'LEFT') {
        p['top'] = parseInt(thickness * scale)
        p['left'] = 0
      } else {
        p['top'] = parseInt(thickness * scale)
        p['right'] = 0
      }
      setWidth(w)
      setHeight(h)
      setPosition(p)
    }
  }, [thickness, length, side, scale])
  console.log({ width, height, ...position })
  return <div className='absolute bg-slate-900' style={{ width, height, ...position }}></div>
}
