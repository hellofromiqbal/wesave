import React from 'react';
import ContactForm from '../../components/fragments/ContactForm';

const ContactPage = (props) => {
  const { paddingtop } = props;
  return (
    <main className={`${paddingtop}`}>
      <ContactForm/>
    </main>
  )
};

export default ContactPage;