import React from 'react';
import { FaShieldAlt as IconShield } from 'react-icons/fa';

const Header = () => {
  return (
    <header
      className='bg-blue-700
      fixed top-0 left-0 right-0
      flex
      justify-between
      items-center
      h-14
      px-10
      py-4
      z-10
      '
    >
      <div className='flex flex-row items-center gap-2'>
        <div className='text-3xl text-white drop-shadow-xl'>
          <IconShield/>
        </div>
        <h1 className='font-bold text-white text-2xl'>WeSafe.</h1>
      </div>
      <div>
        <ul className="flex flex-row gap-4 text-white font-semibold">
          <li><a href="#home">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header;