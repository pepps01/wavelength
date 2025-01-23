import React from 'react'

type InputProps ={
  type: "select|text|number",
  label?:string;
  disabled:boolean;
  value?:string;
  placeholder?:string;
  name?:string;
}

const Input =(
  {
    type,
    label,
    disabled=false,
    value,
    placeholder,
  }:InputProps) => {
  return (
    <div className="mt-4">
      <label>{label} <small>*</small></label>
      <input type={type} placeholder={placeholder}  disabled={disabled} className='border border-gray-250  outline-0 p-2 px-4 rounded-xl w-full font-light mt-1'/>
    </div>
  )
}

export default Input