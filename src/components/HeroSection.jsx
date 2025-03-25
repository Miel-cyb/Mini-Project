import React from 'react'
import Card from './Card'

const HeroSection = () => {
  return (
    <div className='h-screen flex flex-col lg:flex-row mt-14 lg:mt-32'>
        <div className="heroText p-5 lg:w-1/2 leading-8">
            <h2 className='capitalize md:text-2xl font-bold text-deepBlue'>Participate in your campus election securely and easily.</h2>
            <p>Electra Vote simplifies campus elections by providing a secure and transparent online voting platform. Students can easily cast their votes from anywhere, ensuring fairness, accessibility, and increased participation in selecting their leaders.
            </p>
            <button className='bg-yellow-500 text-deepBlue p-2 rounded-xl hover:bg-deepBlue hover:text-white'><a href="#">Vote Now</a></button>
        </div>
        <div className='flex flex-col md:flex-row md:mx-5'>
            <Card text = "Electra" vote='vote' show='true'/>
            <Card  middle='true'/>
            <Card text = "Registered" checked='true' show='true'/>
        </div>
    </div>
  )
}

export default HeroSection
