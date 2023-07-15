import React from 'react'
import JumboSec from '../../sections/JumboSec';
import StepSec from '../../sections/StepSec';
import BannerSec from '../../sections/BannerSec';
import ServicesSec from '../../sections/ServicesSec';

const HomePage = () => {
  return (
    <>
      <JumboSec/>
      <StepSec/>
      <ServicesSec cardcolor="bg-blue-100"/>
      <BannerSec/>
    </>
  )
}

export default HomePage;