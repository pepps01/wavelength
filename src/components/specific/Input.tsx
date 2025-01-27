'use client'

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FieldProps } from 'formik';

type InputProps ={
  type?: "select"|"text"|"number"|"email",
  label?:string;
  disabled?:boolean;
  value?:any;
  placeholder?:string;
  name?:string | undefined;
  onChange?: (value: string) => void;
  field?:any;
  form?:any;
  className?:string;
  error:boolean;
}

const Input =(
  {
    type,
    label,
    disabled=false,
    onChange,
    placeholder,
    name,
    field,
    form,
    className,
    value,
    error,
    ...props
  }:InputProps) => {

    // const [value, setValue] = useState<string>('');
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      // setValue(newValue);
      if (onChange) {
        onChange(newValue); // Call the onChange prop if it exists
      }
    };


  return (
    <div className="">
      {/* {label && <label>{label}</label>} */}
      {label && <label htmlFor={name}>{label}</label>}

      <Field
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        className={`input-field border border-gray-250  outline-0 p-2 px-2 rounded-xl w-full font-light mt-1 ${className}`}
        {...props}
      />
      {error?   
        <ErrorMessage 
            name={name} 
            component="div"
            style={{ color: 'red' }} 
        />
      : <></>}

     
    </div>
  )
}

export default Input