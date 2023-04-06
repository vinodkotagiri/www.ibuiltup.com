import React, { useState } from 'react'
import { RoomAndPositionSelector } from '../'
const ROOMS = [
  {
    id: 'bedroom',
    label: 'Bed Room'
  },
  {
    id: 'living',
    label: 'Living Room'
  },
  {
    id: 'kitchen',
    label: 'Kitchen'
  },
  {
    id: 'dining',
    label: 'Dining Room'
  },
  {
    id: 'drawing',
    label: 'Drawing Room'
  },
  {
    id: 'staircase',
    label: 'Staircase'
  },
  {
    id: 'parking',
    label: 'Parking'
  }
]
export default function RoomSelectors() {
  return (
    <>
      <div className='w-full flex flex-col gap-2'>
        {ROOMS.map((room, index) => (
          <RoomAndPositionSelector key={index} room={room} />
        ))}
      </div>
    </>
  )
}
