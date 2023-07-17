import React from 'react';
import ServiceSec from '../../sections/ServicesSec';

const ServicesPage = (props) => {
  const { paddingtop } = props;
  return (
    <main className={`${paddingtop}`}>
      <ServiceSec cardcolor="bg-blue-100"/>
    </main>
  )
};

export default ServicesPage;