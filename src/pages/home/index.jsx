import React from 'react'
import JumboSec from '../../sections/JumboSec';
import StepSec from '../../sections/StepSec';
import BannerSec from '../../sections/BannerSec';
import ServicesSec from '../../sections/ServicesSec';

const HomePage = () => {
  return (
    <main>
      <JumboSec/>
      <StepSec/>
      <ServicesSec/>
      <BannerSec/>
    </main>
  )
}

export default HomePage;