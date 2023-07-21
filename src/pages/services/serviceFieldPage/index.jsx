import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceField from '../../../customHooks/useServiceField';
import ServiceFieldDetail from '../../../sections/ServiceFieldDetail';
import StepSec from '../../../sections/StepSec';

const ServiceFieldPage = (props) => {
  const { paddingtop } = props;

  const { serviceField } = useParams();

  const content = useServiceField(serviceField);

  return (
    <main className={`${paddingtop}`}>
      <ServiceFieldDetail
        icon={content.icon}
        title={content.title}
        desc={content.desc}
      />
      <StepSec cardcolor="bg-blue-100"/>
    </main>
  )
};

export default ServiceFieldPage;