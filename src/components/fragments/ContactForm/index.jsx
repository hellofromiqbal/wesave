import React from 'react';
import FormInput from '../../elements/FormInput';
import FormTextArea from '../../elements/FormTextArea';
import Button from '../../elements/Button';

import { BsTelephone as IconTelephone } from 'react-icons/bs';
import { GoMail as IconEmail } from 'react-icons/go';

const ContactForm = (props) => {
  const { sectionbgcolor = "bg-white" } = props;
  return (
    <section
      id='contact'
      className={`
      flex
      flex-col
      py-4
      ${sectionbgcolor}
      `}
    >
      <div
        className='
        px-6 md:px-10
        flex
        flex-col md:flex-row
        gap-4
        '
      >
        <div
          className='
          basis-1/2
          '
        >
          <div
            className='
            md:w-3/4
            flex
            flex-col
            gap-4
            '
          >
            <h2
              className='
              font-bold
              text-2xl md:text-3xl lg:text-4xl
              '
            >
              Need additional information?
            </h2>
            <p className='text-sm md:text-base'>
            We're ready to provide assistance and support in the best way possible. Feel free to reach out our team by filling out the convenient form on this page. Look forward to connecting with you so don't hesitate to get in touch with us today!
            </p>
            <div
              className='
              flex
              flex-col
              gap-2
              '
            >
              <div className='flex items-center gap-4'>
                <div className='text-sm lg:text-base'>
                  <IconTelephone/>
                </div>
                <p className='font-bold text-sm lg:text-base'>+123-456-789</p>
              </div>
              <div className='flex items-center gap-4'>
                <div className='text-sm lg:text-base'>
                  <IconEmail/>
                </div>
                <p className='font-bold text-sm lg:text-base'>wesafe@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <form
          action=""
          className='
          basis-1/2
          flex
          flex-col
          gap-4
          '
        >
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
      </div>
    </section>
  )
};

export default ContactForm;