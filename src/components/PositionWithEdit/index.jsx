import { PencilSquareIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setEditingRoom } from '../../redux/features/data'

export default function PositionWithEdit({ label, setEditingPosition, editingPosition, setSelected, selected }) {
  const [checked, setChecked] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    if (checked) setSelected(true)
    else setSelected(false)
  }, [checked])

  useEffect(() => {
    if (!selected) setEditingPosition(null)
  }, [selected])

  const handleEdit = () => {
    if (selected && editingPosition === label.toLowerCase()) setEditingPosition(null)
    else setEditingPosition(label.toLowerCase())
  }
  return (
    <div className='flex gap-1 w-[60px]'>
      <input
        type='checkbox'
        className='accent-lime-700 cursor-pointer'
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
      />
      <label>{label}</label>
      {selected && <PencilSquareIcon className='w-4 text-blue-800 cursor-pointer' onClick={handleEdit} />}
    </div>
  )
}
