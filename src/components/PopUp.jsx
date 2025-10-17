import React from 'react'

const PopUp = ( {showPopUp, onClose}) => {
  return (
    
    <div className = {`bg-white rounded-md w-[300px] md:w-[600px] md:h-auto transition-all duration-500 absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${showPopUp ? 'opacity-100' : 'opacity-0'}`}>
       <div className="icons flex w-full justify-between">
            <i className="fa-brands fa-bluesky text-2xl"></i>
            <i className="fa-brands fa-bluesky text-2xl"></i>
      </div> 
      <p className='md:leading-loose p-2 md:p-5'>"Electra Vote guarantees a seamless and secure voting experience, ensuring transparency and fairness in every election. With end-to-end encryption and real-time vote verification, students can confidently participate in campus elections from anywhere. Your voice matters—make it count!"</p>
      <div className='flex justify-center items-center'> 
        <button onClick={onClose} className=' my-3 w-1/2 text-xl text-center bg-red-800 p-2 text-white rounded-md hover:bg-red-700'>Close</button>
      </div>
      <div className="icons flex w-full justify-between">
            <i className="fa-brands fa-bluesky text-2xl"></i>
            <i className="fa-brands fa-bluesky text-2xl"></i>
      </div> 
    </div>
   
  )
}

export default PopUp
