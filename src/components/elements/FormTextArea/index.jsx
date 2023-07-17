import React from 'react';

import Label from '../FormInput/Label';
import TextArea from './TextArea';

const FormTextArea = (props) => {
  const {
    labelName,
    labelFor,
    textAreaName,
    textAreaId,
    textAreaPlaceholder = "..."
  } = props;
  
  return (
    <div
      className='col-span-1 sm:col-span-1 md:col-span-2 basis-full flex flex-col'>
      <Label
        labelFor={labelFor}
        labelName={labelName}
      />
      <TextArea
        textAreaName={textAreaName}
        textAreaId={textAreaId}
        textAreaPlaceholder={textAreaPlaceholder}
      />
    </div>
  )
};

export default FormTextArea;