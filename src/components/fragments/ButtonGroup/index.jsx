import React from 'react';

const ButtonGroup = (props) => {
  const { children } = props;
  return (
    <div
      className='flex flex-row gap-4'>
      {children}
    </div>
  )
};

export default ButtonGroup;