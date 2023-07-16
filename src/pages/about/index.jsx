import React from 'react';

const AboutPage = (props) => {
  const { margintop } = props;

  return (
    <main className={`${margintop}`}>
      <div>This is About Page</div>
    </main>
  )
};

export default AboutPage;