import React from 'react';
import ContactSec from '../../sections/ContactSec';

const ContactPage = (props) => {
  const { paddingtop } = props;
  return (
    <main className={`${paddingtop}`}>
      <ContactSec/>
    </main>
  )
};

export default ContactPage;