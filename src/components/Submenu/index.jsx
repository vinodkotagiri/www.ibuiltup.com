import React from 'react'
import BedroomMenu from '../BedroomMenu'
import LivingMenu from '../LivingMenu'
export default function Submenu({ room }) {
  return (
    <>
      {room.id === 'bedroom' && <BedroomMenu />}
      {room.id === 'living' && <LivingMenu />}
    </>
  )
}
