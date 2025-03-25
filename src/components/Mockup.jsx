import React from 'react'
import mockupImage from '../assets/images/mockup-portrait.png'

const Mockup = () => {
  return (
<>
    <section className="z-40">
  <img 
    src={mockupImage} 
    alt="Phone Mockup"
    className=" absolute -translate-x-1/2 w-[250px] md:w-[400px] lg:w-[500px] 2xl:w-[700px]  h-auto object-contain " 
  />
</section>
</>

  )
}

export default Mockup
