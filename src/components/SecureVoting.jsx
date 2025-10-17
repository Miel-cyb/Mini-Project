  // import React from 'react'


  // const SecureVotingSection = () => {
  //   return (
  //     <section className="relative py-20 px-5 md:px-20 flex flex-col-reverse md:flex-row items-center gap-10 bg-deepBlue">
  //       <div className="md:w-1/2 text-center md:text-left">
  //         <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4">
  //           Secure & <span className='text-white'>Transparent Voting</span> 
  //         </h2>
  //         <p className="text-white leading-loose">
  //           Electra Vote ensures a fair and secure voting process using modern technology. Every vote is counted transparently, allowing students to participate in elections with confidence and ease.
  //         </p>
  //         <button className="mt-6 bg-darkBlue text-white px-5 py-2 rounded-xl hover:bg-[darkslateblue] hover:text-white transition">
  //           <a href="#">Learn More</a>
  //         </button>
  //       </div>

  //       <div className="relative md:w-1/2 flex justify-center">
  //         <img
  //           src="/card.png"
  //           alt="Isometric Voting Security"
  //           className="w-full max-w-md "
  //         />
  //       </div>
  //     </section>
  //   );
  // };

  // export default SecureVotingSection;







  import React, { useState } from 'react';
import PopUp from './PopUp';

const SecureVotingSection = () => {
  const [displayPopUp, setDisplay ] = useState(false)
  return (
    <section className="relative py-20 px-5 lg:px-20 flex flex-col-reverse md:flex-row items-center gap-10 bg-deepBlue overflow-hidden">

      <div className="md:w-1/2 text-center md:text-left relative z-10">
        <h2 className="text-2xl md:text-4xl font-bold text-yellow-500 mb-6 leading-tight">
          Secure & <span className="text-white">Transparent Voting</span>
        </h2>
        <p className="text-white leading-relaxed text-md mb-6">
          Electra Vote ensures a **fair** and **secure** voting process using modern technology. Every vote is counted transparently, allowing students to participate in elections with confidence and ease.
        </p>
        <ul className="text-white space-y-3 mb-6">
          <li className="flex items-center gap-2">
            ✅ **Tamper-proof online voting system**
          </li>
          <li className="flex items-center gap-2">
            ✅ **Real-time election results tracking**
          </li>
          <li className="flex items-center gap-2">
            ✅ **Accessible from anywhere on campus**
          </li>
        </ul>
        <button onClick={() => setDisplay(true)} className="bg-yellow-500 text-deepBlue px-6 py-3 rounded-xl text-lg font-semibold hover:bg-yellow-400 transition">
          Learn More
        </button>
      </div>
      <div className="relative md:w-1/2 flex justify-center">
      
        
        <img
          src="/card.png"
          alt="Isometric Voting Security"
          className="w-full max-w-md drop-shadow-lg transform rotate-3"
        />
      </div>
      {displayPopUp && ( <PopUp showPopUp={displayPopUp} onClose={() => setDisplay(false)} />)}
     
    </section>
  );
};

export default SecureVotingSection;
