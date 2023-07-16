import React, { useState } from 'react';
import Navbar from '../Navbar';

import { GoShieldLock as IconShield } from 'react-icons/go';
import {
  AiOutlineMenu as IconMenu,
  AiOutlineClose as IconClose
} from 'react-icons/ai';
import Button from '../Button';

const Header = () => {
  const [navIconClicked, setNavIconClicked] = useState(false);

  const onClick = () => {
    setNavIconClicked((prev) => !prev);
  };

  return (
    <>
      <header
        className='bg-blue-700
        fixed top-0 left-0 right-0
        flex
        justify-between
        items-center
        h-14
        px-6 md:px-10
        py-4
        z-10
        shadow-sm
        '
      >
        <div className='flex flex-row items-center gap-1'>
          <div className='text-3xl text-white drop-shadow-xl'>
            <IconShield/>
          </div>
          <h1 className='font-bold text-white text-2xl'>WeSafe.</h1>
        </div>
        <div className='hidden md:flex'>
          <Navbar/>
        </div>
        <div className='flex md:hidden'>
          <Button
            bgcolor="bg-transparent"
            textcolor="text-white"
            textsize="text-2xl"
            bordercolor="border-transparent"
            paddingx="px-0"
            paddingy="px-0"
            onClick={onClick}
          >
            {navIconClicked ? <IconClose/> : <IconMenu/>}
          </Button>
        </div>
      </header>
      {navIconClicked &&
        <div
          className='bg-white
          fixed left-0 right-0
          mt-14
          z-10
          shadow-sm
          '
        >
          <Navbar onClick={onClick}/>
        </div>
      }
    </>
  )
}

export default Header;