import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom';



const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between mt-14 lg:mt-32 px-6 lg:px-20">
      <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
        <h2 className="text-2xl md:text-4xl font-bold leading-tight ">
          Participate in your <span className="text-yellow-500">campus election</span> securely and easily.
        </h2>
        <p className="text-gray-600 leading-relaxed text-md ">
          Electra Vote simplifies campus elections by providing a secure and transparent online voting platform. 
          Students can easily cast their votes from anywhere, ensuring fairness, accessibility, and increased participation in selecting their leaders.
        </p>
        <div >
          <Link to='/login' className="px-6 py-3 bg-yellow-500 text-deepBlue font-semibold rounded-xl shadow-md hover:bg-deepBlue hover:text-white transition-all">
            Vote Now
          </Link>
        </div>
      </div>


      <div className=" mt-10 lg:mt-0 flex flex-col md:flex-row gap-3">
        <Card text="Electra" vote="vote" show="true" />
        <Card middle="true" />
        <Card text="Registered" checked="true" show="true" />
      </div>
    </section>

    
  );
};

export default HeroSection;
