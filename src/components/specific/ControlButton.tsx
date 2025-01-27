import React from 'react'

type ControlButtonProps = {
    type:'submit'| 'button' | 'reset';
    title?: string;
    buttonName?: string;
    buttonImage?: string;
    buttonLink?: any;
    text?:string;
}

const ControlButton = (
    {
       type,
       text,
        title,
    }
    :ControlButtonProps)=> {
        
  return (
    <button type={type} className="submit-button w-[100%] border flex flex-row justify-center align-middle gap-4 py-4 px-3  rounded-full mt-4 bg-purple-800 hover:opacity-5 hover:cursor-pointer text-white">
      {text}
    </button>
  )
}

export default ControlButton