import React from 'react';

const SectionLayout = (props) => {
  const {
    sectionid,
    bgcolor = "bg-white",
    padding,
    children
  } = props;
  
  return (
    <section
      id={sectionid}
      className={`flex flex-col ${bgcolor} ${padding}`}
    >
      <div className='px-6 mdLpx-10'>
        {children}
      </div>
    </section>
  )
};

export default SectionLayout;