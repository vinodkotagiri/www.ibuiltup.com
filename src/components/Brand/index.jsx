import React, { useState } from 'react'
import { PremiumBadge } from '../'
export default function Brand() {
  const [isPremium, _] = useState(true) //update with the state with global state later
  return (
    <div className='w-full flex my-2 mb-6 items-center justify-center'>
      <div className='text-2xl font-bold text-slate-800'>iBuiltup</div>
      {isPremium && <PremiumBadge />}
    </div>
  )
}
