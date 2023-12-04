import React from 'react'

export default function CustomInput(props) {
    const {type,name,placeholder,className}=props;
  return (
    <>
        <input type={type} name={name} className={`form-control ${className}`} placeholder={placeholder} />
    </>
  )
}
