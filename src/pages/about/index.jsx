import React from 'react';

import ProfileSec from '../../sections/ProfileSec';
import StepSec from '../../sections/StepSec';

const AboutPage = (props) => {
  const { paddingtop = "mt-0" } = props;

  return (
    <main className={`${paddingtop}`}>
      <ProfileSec/>
      <StepSec sectionbgcolor="bg-blue-100"/>
    </main>
  )
};

export default AboutPage;