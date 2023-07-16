import React from 'react';
import CompanyProfile from '../../sections/CompanyProfile';
import StepSec from '../../sections/StepSec';

const AboutPage = (props) => {
  const { paddingtop = "mt-0" } = props;

  return (
    <main className={`${paddingtop}`}>
      <CompanyProfile/>
      <StepSec cardcolor="bg-blue-100"/>
    </main>
  )
};

export default AboutPage;