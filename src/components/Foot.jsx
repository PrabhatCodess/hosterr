import React from 'react'

function Foot() {
  return (
    <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
      <ul className='flex gap-6 font-lato text-gray-500'>
        <li>
          <a href="#"> Facebook</a>
        </li>
        <li>
          <a href="#"> Instagram</a>
        </li>
        <li>
          <a href="#"> Twitter</a>
        </li>
      </ul>
      <div className='flex gap-2 '>
        <img src="./assets/Help-Avatar.svg" alt="" />
        <div>
          <p className='font-playfair font-thin '>Have any Questions?</p>
          <a className='font-lato font-bold' href="#">Talk to a Specialist.</a>
        </div>
      </div>

    </div>
  )
}

export default Foot