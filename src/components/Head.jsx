import React from 'react'
import { FaBarsStaggered } from "react-icons/fa6";

function Head() {
  return (
    <div className='flex justify-between  '>
      <div className='flex items-center gap-3'>
        <img src="./assets/Logo.svg" alt="logo" />
        <button className='bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl '>Hosterr is Hiring!</button>
      </div >

      <div className=' hidden lg:flex justify-center items-center gap-24  xl:gap-52 2xl:gap-[27vw] '>
        <ul className='hidden lg:flex  font-lato justify-between items-center text-gray-500 gap-6'>
          <li><a href="#">Plans</a></li>
          <li><a href="#">Find Domain</a></li>
          <li><a href="#">Why Hoster</a></li>
        </ul>

        <div className='hidden lg:flex justify-center items-center font-lato gap-6'>
          <a  className='text-gray-500 ' href="#"> Sign In  </a>
          <button className='rounded-md px-4 py-3  bg-blue-400 hover:bg-blue-600 text-white'>Join Waitlist</button>
        </div>
        
      </div>

      <div className=' lg:hidden '> 
        <FaBarsStaggered />
      </div>
     
    </div>
  )
}

export default Head