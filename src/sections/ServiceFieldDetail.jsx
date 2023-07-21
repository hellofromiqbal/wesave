import React from 'react';
import SectionLayout from '../components/layouts/SectionLayout';

const ServiceFieldDetail = (props) => {
  const { icon, title, desc } = props;

  return (
    <SectionLayout padding="pt-6" bgimg={`bg-[url("/public/images/about.webp")]`}>
      <div className='h-screen md:h-96 flex flex-col md:flex-row justify-center items-center gap-6 lg:w-4/6 m-auto'>
        <div className='basis-1/2 flex justify-center items-center'>
          <div className={`text-7xl md:text-8xl lg:text-9xl p-3 md:p-5 rounded-full bg-transparent border-4 md:border-8 border-white text-white`}>
            {icon}
          </div>
        </div>
        <div className='basis-1/2 flex flex-col gap-4 text-white'>
          <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl'>{title}</h1>
          <p className='text-sm md:text-base'>{desc}</p>
        </div>
      </div>
    </SectionLayout>
  )
};

export default ServiceFieldDetail;