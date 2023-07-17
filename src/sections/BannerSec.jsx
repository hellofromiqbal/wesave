import React from 'react';
import Button from '../components/elements/Button';
import { useNavigate } from 'react-router-dom';
import SectionLayout from '../components/layouts/SectionLayout';

const BannerSec = () => {
  const navigate = useNavigate();

  const onClick = (link) => {
    navigate(link);
  };

  return (
    <SectionLayout
      sectionid="banner"
      bgimg={`bg-[url("/public/images/banner.webp")]`}
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
          onClick={() => onClick("/contact")}
        />
      </div>
    </SectionLayout>
  )
};

export default BannerSec;