import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Plot from '../Plot/Plot'

export default function MainCanvas() {
  return (
    <div className='h-[calc(100%-56px)] w-full flex items-center justify-center'>
      {/* PLOT */}
      <Plot />
      {/* SIDER */}
      {/* LEGEND */}
    </div>
  )
}
