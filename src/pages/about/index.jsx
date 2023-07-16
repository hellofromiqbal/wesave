import React from 'react';
import CompanyProfile from '../../sections/CompanyProfile';
import StepSec from '../../sections/StepSec';

const AboutPage = (props) => {
  const { margintop } = props;

  return (
    <main className={`${margintop}`}>
      <CompanyProfile/>
      <StepSec cardcolor="bg-blue-100"/>
    </main>
  )
};

export default AboutPage;