import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Drawing from './pages/Drawing/Drawing'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function App() {
  return (
    <main className='w-screen h-screen'>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/drawing' element={<Drawing />} />
      </Routes>
      <ToastContainer position='bottom-right' />
    </main>
  )
}
