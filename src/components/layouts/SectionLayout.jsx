import React from 'react';

const SectionLayout = (props) => {
  const {
    sectionid,
    bgcolor = "bg-white",
    bgimg,
    padding,
    children
  } = props;
  
  return (
    <section
      id={sectionid}
      className={`flex flex-col ${bgcolor} ${padding} ${bgimg ? `${bgimg} bg-cover bg-center` : ``}`}>
      <div
        className={`px-6 md:px-10 ${bgimg ? `w-full bg-gradient-to-tl from-transparent to-black p-10 md:p-20` : ``}`}>
        {children}
      </div>
    </section>
  )
};

export default SectionLayout;