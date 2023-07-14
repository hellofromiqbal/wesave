import React from 'react';
import { FaShieldAlt as IconShield } from 'react-icons/fa';
import Navbar from '../Navbar';

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
      <Navbar/>
    </header>
  )
}

export default Header;