import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const { onClick } = props;
  
  return (
    <nav>
      <ul className="flex flex-col md:flex-row gap-0 md:gap-4 text-black md:text-white md:font-semibold">
        <li><Link to="/" onClick={onClick} className='flex items-center px-6 py-4 md:p-0 text-start border-b-[1px] md:border-b-0'>Home</Link></li>
        <li><Link to="/about" onClick={onClick} className='flex items-center px-6 py-4 md:p-0 text-start border-b-[1px] md:border-b-0'>About</Link></li>
        <li><Link to="/services" onClick={onClick} className='flex items-center px-6 py-4 md:p-0 text-start border-b-[1px] md:border-b-0'>Services</Link></li>
        <li><Link to="/contact" onClick={onClick} className='flex items-center px-6 py-4 md:p-0 text-start border-b-[1px] md:border-b-0'>Contact</Link></li>
      </ul>
    </nav>
  )
};

export default Navbar;