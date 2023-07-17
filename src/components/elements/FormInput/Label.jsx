import React from 'react';

const Label = (props) => {
  const { labelFor, labelName } = props;
  
  return (
    <label htmlFor={labelFor} className='font-semibold text-sm md:text-base lg:text-lg mb-2'>
      { labelName }
    </label>
  )
};

export default Label;