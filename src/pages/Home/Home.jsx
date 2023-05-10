import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
export default function Home() {
  const navigate = useNavigate()
  return (
    <div className='w-full h-full'>
      <Navbar />
      {/* SECTION HERO */}
      <section className=''>
        <button
          className='rounded-md bg-primaryLime px-6 py-2 font-semibold text-slate-600 hover:scale-110 ease-in-out duration-300'
          onClick={() => {
            navigate('/drawing')
          }}>
          Get Started
        </button>
      </section>
    </div>
  )
}
