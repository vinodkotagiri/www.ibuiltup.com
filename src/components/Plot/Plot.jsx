import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Plot() {
  const { length, breadth, scale } = useSelector((state) => state.plot)
  const [dimesions, setDimensions] = useState({ width: 0, height: 0 })
  useEffect(() => {
    setDimensions({
      width: Math.floor(length * scale),
      height: Math.floor(breadth * scale)
    })
  }, [length, breadth, scale])
  return <div className='bg-white border-2 shadow-xl' style={{ width: dimesions.width, height: dimesions.height }}></div>
}
