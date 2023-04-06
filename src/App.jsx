import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Drawing from './pages/Drawing'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function App() {
  return (
    <div className='w-full h-screen'>
      <Routes>
        <Route path='/drawing' element={<Drawing />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}
