import React from 'react'
import JumboSec from './sections/JumboSec';
import StepSec from './sections/StepSec';
import ServiceSpec from './sections/ServiceSpec';
import BannerSec from './sections/BannerSec';

const HomePage = () => {
  return (
    <main>
      <JumboSec/>
      <StepSec/>
      <ServiceSpec/>
      <BannerSec/>
    </main>
  )
}

export default HomePage;