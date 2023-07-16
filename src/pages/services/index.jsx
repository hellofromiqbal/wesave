import React from 'react';
import ServiceSec from '../../sections/ServicesSec';
import BannerSec from '../../sections/BannerSec';

const ServicesPage = (props) => {
  const { paddingtop } = props;
  return (
    <main className={`${paddingtop}`}>
      <ServiceSec sectionbgcolor="bg-blue-100"/>
    </main>
  )
}

export default ServicesPage;