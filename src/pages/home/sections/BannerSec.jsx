import React from 'react';
import Button from '../../../components/elements/Button';

const BannerSec = () => {
  return (
    <section
      className='bg-blue-100
      flex
      flex-col
      pt-10
      pb-14
      '
    >
      <div
        className='px-6 md:px-10'
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
            md:text-3xl lg:text-4xl
            my-2
            '
          >WeCare. WeProtect. WeSafe.</h1>
          <Button
            bgcolor="bg-green-700"
            textcolor="text-white"
            text="Start Protection"
          />
        </div>
      </div>
    </section>
  )
};

export default BannerSec;