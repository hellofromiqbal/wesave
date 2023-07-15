import React from 'react';

import { BsTelephone as IconTelephone } from 'react-icons/bs';
import { GoMail as IconEmail } from 'react-icons/go';

const Footer = () => {
  return (
    <footer
      className='
      flex
      flex-col
      py-20
      '
    >
      <div
        className='
        grid
        md:grid-cols-4
        px-6 md:px-10
        gap-10 md:gap-4
        '
      >
        <div
          className='
          flex
          flex-col
          gap-4
          '
        >
          <h4
            className='
            font-bold
            md:text-base lg:text-xl
            '
          >WeSafe.</h4>
          <p
            className='
            text-black
            text-sm lg:text-base
            text-opacity-80
            '
          >We offers a high-level security systems to protect your valuable assets. We have the best services to meet your needs.</p>
          <div
            className='
            flex
            flex-col
            '
          >
            <div className='flex items-center gap-4'>
              <div className='text-sm lg:text-base'>
                <IconTelephone/>
              </div>
              <p className='font-bold text-sm lg:text-base'>+123-456-789</p>
            </div>
            <div className='flex items-center gap-4'>
              <div className='text-sm lg:text-base'>
                <IconEmail/>
              </div>
              <p className='font-bold text-sm lg:text-base'>wesafe@gmail.com</p>
            </div>
          </div>
        </div>
        <div
          className='
          flex
          flex-col
          gap-4
          '
        >
          <h4 className='font-bold md:text-base lg:text-xl'>Company</h4>
          <ul className='flex flex-col gap-2 text-sm lg:text-base'>
            <li><a href="#">Indonesia</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Mobile</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">How We Work</a></li>
          </ul>
        </div>
        <div
          className='
          flex
          flex-col
          gap-4
          '
        >
          <h4 className='font-bold md:text-base lg:text-xl'>Working Hours</h4>
          <ul className='flex flex-col gap-2 text-sm lg:text-base'>
            <li>Technical Support : 24/7</li>
            <li>Non-Technical Support : 9 - 5 on weekdays</li>
          </ul>
        </div>
        <div
          className='
          flex
          flex-col
          gap-4
          '
        >
          <h4 className='font-bold md:text-base lg:text-xl'>Subscription</h4>
          <p className='text-sm lg:text-base'>Subscribe your Email address for latest news & updates.</p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;