import React from 'react';
import SectionLayout from '../components/layouts/SectionLayout';

const ErrorPage = (props) => {
  const { paddingtop } = props;
  
  return (
    <main className={`${paddingtop}`}>
      <h1>Oops! Something went wrong...</h1>
    </main>
  )
};

export default ErrorPage;