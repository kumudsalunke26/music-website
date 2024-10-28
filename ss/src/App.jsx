import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'




const App = () => {
  return (
    <div className='bg-black h-screen w-[100%] gap-2'>
      
      
     <Routes>
      <Route path='/login' element={<Login/>}>
      
      </Route>
      <Route path='/home' element={<Home/>}></Route>
     </Routes>

    </div>
  )
}
export default App

