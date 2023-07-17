import React from 'react'
import SectionLayout from '../components/layouts/SectionLayout';
import ContactForm from '../components/fragments/ContactForm';

import { BsTelephone as IconTelephone } from 'react-icons/bs';
import { GoMail as IconEmail } from 'react-icons/go';

const ContactSec = () => {
  return (
    <SectionLayout padding="py-6">
      <div className='flex flex-col md:flex-row gap-6 md:gap-0'>
        <div className='basis-1/2'>
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
        <div className="basis-1/2">
          <ContactForm/>
        </div>
      </div>
    </SectionLayout>
  )
}

export default ContactSec;