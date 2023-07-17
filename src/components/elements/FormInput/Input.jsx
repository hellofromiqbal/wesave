import React from 'react';

const Input = (props) => {
  const { inputType, inputId, inputName, inputPlaceholder } = props;
  return (
    <input
      type={inputType}
      name={inputId}
      id={inputName}
      placeholder={inputPlaceholder}
      className='border-transparent bg-gray-100 text-sm md:text-base border-2 rounded px-2 py-1'
      autoComplete="off"
    />
  )
};

export default Input;