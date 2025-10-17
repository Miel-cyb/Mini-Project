import React from 'react'
import Navbar from './Navbar'
import MainText from './mainText'
import Mockup from './mockup'

const Header = () => {
  return (
    <div className='bg-deepBlue bg-no-repeat bg-center bg-cover h-screen w-full overflow-hidden relative'>
        <Navbar/>
        <div className='flex flex-col items-center justify-center py-12 relative  my-10 '>
          <div className='circle p-28 my-16 md:p-52 md:my-28 2xl:p-72'></div>
        <MainText/>
        <Mockup/>
        </div>
     
      <div className=' hidden md:flex justify-between absolute w-full bottom-0'>
        <img src="/blob.png" alt="blob" className='blob md:w-[420px] 2xl:w-[600px]'/>
        <img src="/blob.png" alt="blob" className='blob md:w-[420px] 2xl:w-[600px]'/>
      </div>
    </div>
  )
}

export default Header
