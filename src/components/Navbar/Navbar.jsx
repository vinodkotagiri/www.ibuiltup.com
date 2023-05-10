import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='w-full bg-slate-800 h-14 flex items-center px-3 text-slate-200 justify-between pr-8 z-50 sticky top-0 left-0'>
      {/* BRAND */}
      <div className='text-2xl italic text-primaryLime'>i-builtup</div>
      {/* NAV ELEMENTS */}
      <div className='flex gap-6 text-xl font-semibold items-center'>
        <NavLink to='/' className='hover:text-primaryLime hover:scale-110 ease-in-out duration-300'>
          Home
        </NavLink>
        <NavLink to='/partners' className='hover:text-primaryLime hover:scale-110 ease-in-out duration-300'>
          Partners
        </NavLink>
        <button className=' bg-primaryLime p-1 px-3 rounded-md  text-slate-800 hover:scale-110 ease-in-out duration-300'>Login</button>
      </div>
    </nav>
  )
}
