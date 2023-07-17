import React from 'react';
import SectionLayout from '../../components/layouts/SectionLayout';
import Button from '../../components/elements/Button';

const ErrorPage = (props) => {
  const { paddingtop } = props;
  
  return (
    <main className={`${paddingtop}`}>
      <SectionLayout padding="py-6">
        <div className='h-screen md:h-96 flex flex-col gap-4 justify-center items-center'>
          <h1 className='font-bold text-sm md:text-2xl lg:text-3xl'>You're looking for something that doesn't exist...</h1>
          <Button
            bgcolor="bg-blue-700"
            bordercolor="border-transparent"
          >Go Back</Button>
        </div>
      </SectionLayout>
    </main>
  )
};

export default ErrorPage;