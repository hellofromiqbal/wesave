import React from 'react';
import Label from './Label';
import Input from './Input';

const FormInput = (props) => {
  const {
    labelName,
    labelFor,
    inputType = "text",
    inputName,
    inputId,
    inputPlaceholder = "..."
  } = props;
  return (
    <div
      className='
      flex
      flex-col
      '
    >
      <Label
        labelFor={labelFor}
        labelName={labelName}
      />
      <Input
        inputType={inputType}
        inputName={inputName}
        inputId={inputId}
        inputPlaceholder={inputPlaceholder}
      />
    </div>
  )
};

export default FormInput;