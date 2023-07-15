import React from 'react';
import Button from '../../../components/elements/Button';

const BannerSec = () => {
  return (
    <section
      className='
      flex
      bg-[url("/public/images/banner.webp")]
      bg-cover
      bg-center
      '
    >
      <div
        className='
        bg-gradient-to-tl from-transparent to-black
        p-10 md:p-20
        px-6 md:px-10
        w-full
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
            bgcolor="bg-blue-700"
            textcolor="text-white"
            bordercolor="border-transparent"
            children="Start Protection"
          />
        </div>
      </div>
    </section>
  )
};

export default BannerSec;