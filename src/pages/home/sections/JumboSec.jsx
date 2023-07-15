import React from 'react';
import Button from '../../../components/elements/Button';
import ButtonGroup from '../../../components/fragments/ButtonGroup';

import { FaShieldAlt as IconShield } from 'react-icons/fa';

const JumboSec = () => {
  return (
    <section
      id='home'
      className='
      bg-[url("images/jumbo2.webp")] md:bg-[url("images/jumbo1.webp")]
      md:bg-cover
      bg-center
      '
    >
      <div
        className='
        h-screen md:h-max lg:h-screen
        flex
        flex-col-reverse md:flex-row
        pt-0 md:pt-20 lg:pt-0
        pb-0 md:pb-10 lg:pb-0
        px-6 md:px-10
        '
      >
        <div
          className='
          basis-1/2 md:basis-1/2 lg:basis-1/3
          flex
          items-center
          '
        >
          <div
            className='
            flex
            flex-col
            gap-0 md:gap-4
            '
          >
            <h2
              className='font-bold text-sm md:text-base lg:text-xl text-white md:text-black'
            >Protect your assets now</h2>
            <h1
              className='font-bold text-3xl md:text-4xl lg:text-5xl text-white md:text-black'
            >
              Feel
              <span className='bg-white md:bg-none text-black md:text-blue-700'> safe </span>
              with our security service
            </h1>
            <p
              className='text-white md:text-black text-opacity-80 my-4 text-sm md:text-base'
            >Secure your valuable assets with high-level & systematic protection, fast-response 24/7 assistance and much more.</p>
            <ButtonGroup>
              <Button
                bgcolor="bg-blue-700"
                children="Start Protection"
                bordercolor="border-transparent"
              />
              <Button
                bgcolor="bg-white"
                textcolor="text-blue-700"
                bordercolor="border-transparent"
                children="Learn More"
              />
            </ButtonGroup>
          </div>
        </div>
        <div
        className='
          basis-1/2 md:basis-1/2 lg:basis-2/3
          flex
          flex-row
          items-center
          justify-center
          '
        >
          <div
            className='
            mt-40 md:mt-0
            flex
            justify-center
            items-center
            gap-2
            '
          >
            <div
              className='
              text-white md:text-blue-700
              text-6xl md:text-7xl lg:text-9xl
              drop-shadow-xl
              '
            >
              <IconShield/>
            </div>
            <h1
              className='
              font-bold
              text-5xl md:text-6xl lg:text-8xl
              text-white md:text-blue-700
              shadow-red-800
              drop-shadow-xl
              '
            >WeSafe.</h1>
          </div>
        </div>
      </div>
    </section>
  )
};

export default JumboSec;