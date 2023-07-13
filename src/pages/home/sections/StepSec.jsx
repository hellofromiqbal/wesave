import React from 'react';

import { HiOutlineLink as IconConnect } from 'react-icons/hi';
import { GoDiscussionClosed as IconDiscuss } from 'react-icons/go';
import { BsEmojiSmile as IconRelax } from 'react-icons/bs';
import Card from '../../../components/elements/Card';
import CardGroup from '../../../components/fragments/CardGroup';

const StepSec = () => {
  const steps = [
    {
      id: 1,
      icon: <IconConnect/>,
      title: "Connect",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo delectus quis assumenda possimus ratione laboriosam nam rem labore distinctio voluptate."
    },
    {
      id: 2,
      icon: <IconDiscuss/>,
      title: "Discuss",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo delectus quis assumenda possimus ratione laboriosam nam rem labore distinctio voluptate."
    },
    {
      id: 3,
      icon: <IconRelax/>,
      title: "Relax",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo delectus quis assumenda possimus ratione laboriosam nam rem labore distinctio voluptate."
    },
  ];
  return (
    <section
      id='steps'
      className='
      flex
      flex-col
      pt-6
      bg-blue-100
      '
    >
      <div
        className='px-6 md:px-10'
      >
        <div
          className='
          w-full md:w-1/2
          mx-auto
          text-center
          '
        >
          <h3
            className='
            font-semibold
            text-sm md:text-base lg:text-xl
            '
          >Protect your assets now</h3>
          <h2
            className='
            font-bold
            text-2xl md:text-3xl lg:text-4xl
            my-2
            '
          >
            <span className='text-blue-700'>Reliable</span> Service Partner
          </h2>
        </div>
        <CardGroup>
          {steps.map((step) => (
            <Card
              key={step.id}
              bgcolor="bg-white"
              iconcolor="blue"
              iconbordercolor="blue"
              icon={step.icon}
              title={step.title}
              desc={step.desc}
            />
          ))}
        </CardGroup>
      </div>
    </section>
  )
}

export default StepSec;