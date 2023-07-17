import React from 'react';
import SectionLayout from '../../../components/layouts/SectionLayout';
import { useParams } from 'react-router-dom';
import useServiceField from '../../../customHooks/useServiceField';

const ServiceFieldPage = (props) => {
  const { paddingtop } = props;

  const { serviceField } = useParams();

  const content = useServiceField(serviceField);

  return (
    <main className={`${paddingtop}`}>
      <SectionLayout padding="py-6">
        <div className='h-screen flex flex-col justify-center items-center'>
          <h1>{content.title}</h1>
          <p>{content.desc}</p>
        </div>
      </SectionLayout>
    </main>
  )
};

export default ServiceFieldPage;