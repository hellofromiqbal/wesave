import React from 'react';

const CompanyProfile = () => {
  return (
    <section
      id='steps'
      className='
      flex
      flex-col
      pt-6
      pb-6
      bg-blue-100
      '
    >
      <div
        className='px-6 md:px-10'
      >
        <div
          className='
          flex
          flex-col md:flex-row
          gap-6
          lg:w-4/6
          m-auto
          '
        >
          <div
            className='
            basis-1/2
            '
          >
            <img src="/images/about.webp" alt="company"/>
          </div>
          <div
            className='
            basis-1/2
            flex
            flex-col
            gap-4
            '
          >
            <div>
              <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl'>Let <span className='text-blue-700'>WeSave</span> Security take care of your assets</h1>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-sm md:text-base'>WeSave security aims to provide the highest quality security consulting in the world to provide peace of mind.</p>
              <p className='text-sm md:text-base'>From our custom tooling to our impeccable reliability, we strive for perfection so clients never have to wait for a report or wonder if their assets are adequately tested.</p>
              <p className='text-sm md:text-base'>We also hold industry-leading certifications, such as:</p>
            </div>
            <div
              className='
              flex
              flex-row
              justify-center
              '
            >
              <div className='transform: scale-75'>
                <img className='' src="/images/achievement1.webp" alt="oscp" />
              </div>
              <div className='transform: scale-75'>
                <img className='' src="/images/achievement2.webp" alt="oscp" />
              </div>
              <div className='transform: scale-75'>
                <img className='' src="/images/achievement3.webp" alt="oscp" />
              </div>
            </div>
          </div>
          <div>

          </div>
        </div>
      </div>
    </section>
  )
};

export default CompanyProfile;