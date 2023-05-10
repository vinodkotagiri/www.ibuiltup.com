import React from 'react'
export default function InputWithLabel({ value, setValue, label, type }) {
  const handleChange = (e) => {
    e.preventDefault()
    setValue(e.target.value)
    console.log('e.target.value', e.target.value)
  }
  return (
    <div className={`flex gap-2 items-center justify-center bg-lime-800  pl-2 rounded-md h-8`}>
      <label className={`capitalize text-slate-200 text-xl text-md`}>{label}</label>
      {type === 'dimensions' ? <input className={`outline-none w-20 h-full rounded-r-md px-2 text-slate-700  font-semibold text-md`} value={value} onChange={handleChange} /> : null}
      {type === 'facing' ? (
        <select className={`outline-none w-24 capitalize font-semibold h-full rounded-r-md px-2 text-slate-700 text-md`} value={value} onChange={handleChange}>
          <option value=''>select</option>
          <option value='E'>East</option>
          <option value='W'>West</option>
          <option value='N'>North</option>
          <option value='S'>South</option>
        </select>
      ) : null}
      {type === 'bhk' ? (
        <select className={`outline-none w-24 capitalize font-semibold h-full rounded-r-md px-2 text-slate-700 text-md`} value={value} onChange={handleChange}>
          <option value=''>select</option>
          <option value='1BHK'>1 BHK</option>
          <option value='2BHK'>2 BHK</option>
          <option value='3BHK'>3 BHK</option>
          <option value='4BHk'>4 BHK</option>
        </select>
      ) : null}
    </div>
  )
}
