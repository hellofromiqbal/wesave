import React from 'react';

const Button = (props) => {
  const {
    bgcolor = "bg-black",
    textcolor = "text-white",
    bordercolor = "border-transparent",
    text,
  } = props;
  return (
    <button
      className={`
      font-bold
      text-sm md:text-base lg:text-lg
      w-max
      py-2
      px-4
      shadow-lg
      rounded
      border-2
      hover:shadow-xl
      duration-500
      ${bgcolor} ${textcolor} ${bordercolor}
      `}
    >
      {text}
    </button>
  )
};

export default Button;