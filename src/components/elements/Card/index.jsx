import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const {
    bgcolor = "bg-white",
    iconcolor = "blue",
    iconbordercolor = "blue",
    icon,
    title,
    desc,
    readMore = false
  } = props;

  return (
    <div
      className={`
      flex
      flex-col
      items-center
      text-center
      gap-2
      p-4 md:p-8
      ${bgcolor}
      `}
    >
      <div
        className={`
        text-3xl md:text-4xl lg:text-5xl
        p-3 md:p-5
        rounded-full
        bg-transparent
        border-2 md:border-4
        border-${iconbordercolor}-700
        text-${iconcolor}-700
        `}
      >
        {icon}
      </div>
      <div className='h-full'>
        <h3
          className='
          font-bold
          text-lg md:text-base lg:text-xl
          mt-2'
        >
          {title}
        </h3>
        <small
          className='
          text-black
          text-xs lg:text-base
          text-opacity-80
          '
        >
          {desc}
        </small>
      </div>
      {readMore &&
        <Link to={"/a"} className='text-blue-700'>Read More</Link>
      }
    </div>
  )
};

export default Card;