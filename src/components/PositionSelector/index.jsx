import React, { useState } from 'react'

import { PencilSquareIcon } from '@heroicons/react/24/outline'
import PositionWithEdit from '../PositionWithEdit'
export default function PositionSelector({ setSelectedPosition, room, setEditingPosition, editingPosition }) {
  const [nw, setNw] = useState(false)
  const [ne, setNe] = useState(false)
  const [sw, setSw] = useState(false)
  const [se, setSe] = useState(false)

  const handleSelection = (e) => {
    setSelectedPosition(e.target.value)
  }

  return (
    <div className='flex gap-3 text-xs items-center '>
      <PositionWithEdit
        label='NW'
        editingPosition={editingPosition}
        setEditingPosition={setEditingPosition}
        setSelected={setNw}
        selected={nw}
      />
      <PositionWithEdit
        label='NE'
        editingPosition={editingPosition}
        setEditingPosition={setEditingPosition}
        setSelected={setNe}
        selected={ne}
      />
      <PositionWithEdit
        label='SW'
        editingPosition={editingPosition}
        setEditingPosition={setEditingPosition}
        setSelected={setSw}
        selected={sw}
      />
      <PositionWithEdit
        label='SE'
        editingPosition={editingPosition}
        setEditingPosition={setEditingPosition}
        setSelected={setSe}
        selected={se}
      />
    </div>
  )
}
