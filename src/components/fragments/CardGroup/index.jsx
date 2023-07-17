import React from 'react';

const CardGroup = (props) => {
  const { children } = props;

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 md:py-10'>
      {children}
    </div>
  )
};

export default CardGroup;