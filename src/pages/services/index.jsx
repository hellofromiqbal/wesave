import React from 'react';
import ServiceSec from '../../sections/ServicesSec';
import BannerSec from '../../sections/BannerSec';

const ServicesPage = (props) => {
  const { margintop } = props;
  return (
    <main className={`${margintop}`}>
      <ServiceSec sectionbgcolor="bg-blue-100"/>
    </main>
  )
}

export default ServicesPage;