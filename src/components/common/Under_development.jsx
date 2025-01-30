import React from "react"

export const UnderDevelopment = ({ text = 'This is a feature under development' }) => {
  return (
    <>
      <h1 className='text-3xl font-bold mb-5 text-secondary'>{text}</h1>
    </>
  )
}


