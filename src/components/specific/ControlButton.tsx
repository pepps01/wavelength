import React from 'react'

type ControlButtonProps = {
    title?: string;
    buttonName: string;
    buttonImage?: string;
    buttonLink?: any;
}

const ControlButton = (
    {
        title,
        buttonName,
        buttonImage,
        buttonLink
    }
    :ControlButtonProps)=> {
        
  return (
    <div className='w-100 border flex flex-row justify-center align-middle gap-4 py-3 px-3  rounded-full mt-4 bg-purple-800 hover:opacity-5 hover:cursor-pointer'>
            <div>{buttonImage}</div>
            <div className='text-white text-xl'>{buttonName}</div>
    </div>
  )
}

export default ControlButton