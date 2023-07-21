import React from 'react';

import SectionLayout from '../components/layouts/SectionLayout';
import CardGroup from '../components/fragments/CardGroup';
import Card from '../components/elements/Card';

import { HiOutlineLink as IconConnect } from 'react-icons/hi';
import { GoDiscussionClosed as IconDiscuss } from 'react-icons/go';
import { BsEmojiSmile as IconRelax } from 'react-icons/bs';

const StepSec = (props) => {
  const { sectionbgcolor = "bg-white", cardcolor="bg-white" } = props;

  const steps = [
    {
      id: 1,
      icon: <IconConnect/>,
      title: "Connect",
      desc: "Connecting with each other is the first step to starting to care about you. This is very important step so we know what you really need."
    },
    {
      id: 2,
      icon: <IconDiscuss/>,
      title: "Discuss",
      desc: "Here, we discuss what kind of solutive option that you really need. We also offer an alternative options to make you feel protected."
    },
    {
      id: 3,
      icon: <IconRelax/>,
      title: "Relax",
      desc: "After discussion, all you need to do just relax and put a smile on your face. Consider everything is done by our protection."
    }
  ];

  return (
    <SectionLayout
      sectionid="steps"
      bgcolor={sectionbgcolor}
      padding="pt-6"
    >
      <div className='w-full md:w-1/2 mx-auto text-center'>
        <h3 className='font-semibold text-sm md:text-base lg:text-xl'>Protect your assets now</h3>
        <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl my-2'>
          <span className='text-blue-700'>Reliable</span> Service Partner
        </h2>
      </div>
      <CardGroup>
        {steps.map((step) => (
          <Card
            key={step.id}
            bgcolor={cardcolor}
            iconcolor="blue"
            iconbordercolor="blue"
            icon={step.icon}
            title={step.title}
            desc={step.desc}
          />
        ))}
      </CardGroup>
    </SectionLayout>
  )
};

export default StepSec;