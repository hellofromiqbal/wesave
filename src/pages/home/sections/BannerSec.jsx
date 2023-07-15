import React from 'react';
import Button from '../../../components/elements/Button';

const BannerSec = () => {
  return (
    <section
      className='
      flex
      flex-col
      pt-10
      pb-14
      bg-gradient-to-tl from-blue-100 to-blue-900 via-blue-700
      '
    >
      <div
        className='
        px-6 md:px-10
        '
      >
        <div
          className='
          flex
          flex-col
          justify-center
          items-center
          gap-4
          '
        >
          <h1
            className='
            font-bold
            text-3xl lg:text-4xl
            my-2
            text-center
            text-white
            '
          >WeCare. WeProtect. WeSafe.</h1>
          <Button
            bgcolor="bg-white"
            textcolor="text-blue-700"
            bordercolor="border-transparent"
            children="Start Protection"
          />
        </div>
      </div>
    </section>
  )
};

export default BannerSec;