import React from 'react'

const TextArea = (props) => {
  const { textAreaName, textAreaId, textAreaPlaceholder } = props;
  return (
    <textarea
      name={textAreaName}
      id={textAreaId}
      className='border-transparent bg-gray-100 text-sm md:text-base border-2 rounded px-2 py-1 resize-none h-40'
      placeholder={textAreaPlaceholder}
    />
  )
}

export default TextArea;