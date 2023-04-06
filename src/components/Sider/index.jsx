import React from 'react'
import { Brand, RoomSelectors } from '../'
export default function Sider({ open }) {
  return (
    <aside
      className={`w-[400px] bg-white h-full p-2 border-r-2 border-lime-700 absolute top-0 ${
        open ? 'left-0' : 'left-[-400px]'
      } ease-in-out duration-700`}>
      {/* BRAND NAME */}
      <Brand />
      {/* ROOM SELECTORS */}
      <RoomSelectors />
    </aside>
  )
}
