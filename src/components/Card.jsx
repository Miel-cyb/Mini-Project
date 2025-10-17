import React from 'react'
import signUpImage from '../assets/images/signup.png'
const Card = ({
              text,
              vote,
              checked= false,
              middle=false,
              show=false,
            }
) => {
  return (
    <div >
        {middle && (
            <div className='rounded-[10px] md:mt-20 mx-5 md:mx-0'>
                <img src={signUpImage} alt="signUppage" className='h-[300px] w-[400px]'/>
            </div>
        )}
        {show && (
             <div className={`bg-deepBlue rounded-[10px] h-[300px] md:w-[200px] mx-5 md:mx-0 outline-double ${checked ? 'md:mt-40' : 'mt-auto'} `}>
            
             <div className='text-center relative top-1/2  '>
             {checked && (
                <button className='text-yellow-500 text-2xl'><i className="fa-solid fa-circle-check"></i></button>
            )}
             <h1 className='font-pacifico text-2xl text-white'>{text} <span className='text-yellow-500'>{vote}</span> </h1></div>
        </div>
        )}
       
    </div>
  )
}

export default Card
