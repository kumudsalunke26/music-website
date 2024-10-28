import React from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Display from '../components/Display'
import Player from '../components/Player'

const Home = () => {
  return (
    <div className='bg-black h-full w-[100%]'>
      <Navbar/>
      <Sidebar/>
      <Display/>
      <Player/>
    </div>
  )
}

export default Home
