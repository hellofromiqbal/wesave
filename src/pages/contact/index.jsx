import React from 'react';
import ContactForm from '../../components/fragments/ContactForm';

const ContactPage = (props) => {
  const { margintop } = props;
  return (
    <main className={`${margintop}`}>
      <ContactForm/>
    </main>
  )
};

export default ContactPage;