import React from 'react';

import FormInput from '../../elements/FormInput';
import FormTextArea from '../../elements/FormTextArea';
import Button from '../../elements/Button';


const ContactForm = () => {
  return (
    <form
      action=""
      className='w-full flex flex-col gap-4'>
      <FormInput
        labelName="Name"
        labelFor="name"
        inputType="text"
        inputName="name"
        inputId="name"
        inputPlaceholder="John Doe"
      />
      <FormInput
        labelName="Email"
        labelFor="email"
        inputType="email"
        inputName="email"
        inputId="email"
        inputPlaceholder="johndoe@email.com"
      />
      <FormTextArea
        labelName="Message"
        labelFor="message"
        textAreaName="message"
        textAreaId="message"
        textAreaPlaceholder="Hello! I would like to..."
      />
      <Button
        bgcolor="bg-blue-700"
        textcolor="text-white"
        bordercolor="border-transparent"
      >
        Send
      </Button>
    </form>
  )
};

export default ContactForm;