import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'


const Sidebar = () => {
  const navigate=useNavigate();
  return (
    <div className='w-[25%]  h-full px-2  pb-36 gap-2 flex-col text-white hidden lg:flex '>
      {/* <div className='bg-[#151515] h-[20%] rounded flex flex-col justify-end '>
      <img className='h-[11rem] w-[10rem] flex justify-between pt-3 pb-3 pl-3 rounded-full' src={assets.logo5_icon} />
      <img className='items-end flex justify-end h-5 w-44 px-4 py-2 grid-rows-2' src={assets.logo2_icon}/> */}
       
        
        
      {/* </div> */}
      <div className='bg-[#121212] h-[70%] rounded mt-[10rem]'>
        <div onClick={()=>navigate('/')} className='flex items-center gap-3 pl-4 pr-10 pt-5 cursor-pointer'>
           <img className='w-6' src={assets.home_icon} />       
           <p className='font-bold'>Home</p>
        </div>
        <div className='gap-5 p-4 flex items-center justify-between'>
          
       
          <div className='flex items-center gap-3'>
            <img className='w-8' src={assets.stack_icon} />
            <p className='font-semibold'>Your Library</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className='w-5' src={assets.arrow_icon} />
            <img className='w-5' src={assets.plus_icon} />
          </div>
        </div>
        <div className='bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 h-40 pt-2 pb-2 '>
           <h1 className='font-bold pt-5'>Create your first playlist. </h1>
           <p className='font-semibold'>It's easy , we'll help you!</p>
           <button className='px-4 py-1.5 bg-purple-900 text-[15px] text-white rounded-full mt-4'>Create Playlist</button>
        </div>

        <div className='gap-5 items-center grid grid-cols-2 p-5 justify-between'>
        <button className='w-60 gap-2 px-4 py-2 bg-purple-900 text-[15px] text-white rounded-full mt-4'>Recommendations</button>
        <button className='w-60 gap-2 px-4 py-2 bg-purple-900 text-[15px] text-white rounded-full mt-4'>New Releases</button>
        {/* <button className='w-60 px-4 py-2 bg-purple-900 text-[15px] text-white rounded-full mt-4'>Radio</button>
        <button className='w-60 px-4 py-2 bg-purple-900 text-[15px] text-white rounded-full mt-4'>Feed</button>  */}
        </div>

        <div className='gap-5 items-center grid grid-rows-3 justify-evenly'>
        <button className='w-60 gap-2 px-4 py-2 bg-purple-900 text-[15px] text-white rounded-full mt-4'>Bollywood Hits</button>
        <button className='w-60 gap-2 px-4 py-2 bg-purple-900 text-[15px] text-white rounded-full mt-4'>Hollywood Hits</button>
        <button className='w-60 px-4 py-2 bg-purple-900 text-[15px] text-white rounded-full mt-4'>Old Hits</button>
        </div>
        
      </div>
    </div>
  )
}

export default Sidebar

