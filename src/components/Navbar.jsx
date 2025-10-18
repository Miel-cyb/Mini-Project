import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState(true);

  return (
    <nav className='z-40 '>
      <div className=' flex flex-col md:flex-row justify-between md:px-5'>
        <div className='flex justify-between font-bold  sm:text-white p-7 text-[15px] 2xl:text-[25px]'>
          <Link to='/' className='font-pacifico text-1xl text-white'>
            Electra <span className='text-yellow-500'>Vote</span>
          </Link>
          <button className='hover:text-white text-yellow-500 md:hidden transition-all duration-500' onClick={() => setMenu(!menu)}>
            {menu ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-xmark"></i>}
          </button>
        </div>

        <div className={`navLinks transition-[max-height] ease-in-out duration-500 overflow-hidden ${menu ? 'max-h-0' : 'max-h-[500px]'} md:max-h-[500px] bg-darkBlue md:bg-transparent text-[14px] 2xl:text-[25px] `}>
          <ul className='text-white leading-[40px] p-5 md:flex gap-12'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/upcoming-elections">Upcoming Elections</Link></li>
            <li><a href="#contact" >Contact</a></li>
            <li className='md:border md:rounded-3xl md:h-8 md:flex md:items-center md:justify-center md:my-1 md:bg-blue-950  md:w-20 md:text-center 2xl:w-32 2xl:h-10'><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
