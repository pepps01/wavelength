import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import Image from "next/image";

type NavbarProps = {
  title?:string;
}
const Navbar =(title:NavbarProps)=> {
  return (
    <div className='w-full flex flex-row justify-around align-middle  py-4'>
        <div className='text-xl'>
          <Image
                className="dark:invert"
                src="/Logo.png"
                alt="Next.js logo"
                width={180}
                height={38} 
                priority
          />
        </div>
        <div className='flex flex-row justify-start gap-2 align-middle sm:flex-row sm:justify-start sm:gap-2 sm:align-middle'>
            <div>
                <FaArrowLeftLong />
            </div>
            {/* <div className='text-xl font-extralight'>{title}</div> */}
        </div>
          <div className='border border-purple-800 rounded-3xl px-5 py-3 text-purple-800 text-center text-sm'>
              Log out
          </div>
    </div>
  )
}

export default Navbar