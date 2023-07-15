import React from 'react';

const Button = (props) => {
  const {
    bgcolor = "bg-black",
    textcolor = "text-white",
    textsize = "text-sm",
    paddingx = "px-4",
    paddingy = "py-2",
    onClick = () => {},
    bordercolor = "border-blue-700",
    children,
  } = props;
  return (
    <button
      className={`
        font-semibold
        sm:text-sm md:text-base lg:text-lg
        w-max
        border-2
        ${bgcolor !== "bg-white" && `hover:bg-blue-500 transition-all`}
        ${bgcolor} ${textcolor} ${textsize} ${paddingx} ${paddingy} ${bordercolor}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  )
};

export default Button;