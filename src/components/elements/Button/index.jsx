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
      className={`first-letter:font-semibold first-letter:sm:text-sm md:text-base lg:text-lg first-letter:w-max first-letter:border-2 first-letter:${bgcolor !== "bg-white" && `hover:bg-blue-500 transition-all`} first-letter:${bgcolor} ${textcolor} ${textsize} ${paddingx} ${paddingy} ${bordercolor}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
};

export default Button;