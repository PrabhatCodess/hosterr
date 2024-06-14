import React from 'react'

function Middle() {
  return (
    <div className='-space-y-4 lg:flex '>
      <div className='flex items-center  justify-center lg:flex-1 lg:order-2 lg:justify-end 2xl:justify-end '>
        <img src="./assets/Blue-Shape.svg" alt="1"  className=' -rotate-45 h-64 md:h-96'     />
        <img src="./assets/Pink-Shape.svg" alt="2"  className='absolute -rotate-[30deg] h-64 md:h-96' />
        <img src="./assets/Purple-Shape.svg" alt="3" className='absolute -rotate-[15deg] h-64 md:h-96' />
        <img src="./assets/Hero-Model.png" alt="4" className='absolute h-64 md:h-96 ' />
      </div>

      <div className='lg:flex-1 lg:order-1'>
        <h1 className='text-5xl font-bold font-playfair leading-tight mt-5 2xl:text-5xl'>Host your website in  less  than 5 minutes</h1>
        <p className='font-lato text-gray-500 mt-2'>With Hoster , get your website up and running in no less than 5 minutes with the most compititive pricing pakages available online</p>
        <form action="" className='flex flex-col gap-4 md:flex-row'>
          <input className='rounded-md px-4 py-3 mt-2 placeholder:text-gray-500' type="email" placeholder='Enter your email' />
          <button className='rounded-md px-4 py-3  bg-blue-400 hover:bg-blue-600 text-white'>Join Waitlist</button>
        </form>
        <div className='flex mt-5 gap-2'><img src="./assets/Checkmark.svg" alt="check" />
        <p className='font-lato text-gray-400'>No spam , ever Unsubscribe anytime</p>
        </div>
      </div>
    </div>
  )
}

export default Middle