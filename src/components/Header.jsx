import React from 'react'
import Navbar from './Navbar'
import MainText from './mainText'
import Mockup from './mockup'

const Header = () => {
  return (
    <div className=' bg-no-repeat bg-center bg-cover h-screen w-full '>
        <Navbar/>
        <div className=''>

        <div className='flex flex-col items-center justify-center relative bg-deepBlue h-3/4 '>
          <div className='circle p-28 my-16 md:p-52 md:my-28 2xl:p-72'></div>
        <MainText/>
        <Mockup/>
        </div>
        </div>
     
      <div className=' hidden md:flex  justify-between absolute w-full bottom-0'>
        <img src="/blob.png" alt="blob" className='blob md:w-[400px] 2xl:w-[600px]'/>
        <img src="/blob.png" alt="blob" className='blob md:w-[400px] 2xl:w-[600px]'/>
      </div>
    </div>
  )
}

export default Header
