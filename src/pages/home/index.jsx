import React from 'react'
import JumboSec from '../../sections/JumboSec';
import StepSec from '../../sections/StepSec';
import ServicesSec from '../../sections/ServicesSec';

const HomePage = () => {
  return (
    <main>
      <JumboSec/>
      <StepSec cardcolor="bg-blue-100"/>
      <ServicesSec sectionbgcolor="bg-blue-100"/>
    </main>
  )
}

export default HomePage;