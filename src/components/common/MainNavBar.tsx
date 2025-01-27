import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function MainNavBar() {
  return (
    <div className='flex flex-row justify-between align-middle py-6 w-full max-w-[1256px] mx-auto'>
      <Link href="/">
             <Image
                className="dark:invert"
                src="/Logo.png"
                alt="Company Logo"
                width={180}
                height={38}
                priority
                />
        </Link>
        <div className='flex flex-row gap-8 align-bottom justify-center'>
            <Link href={"/contact"} className='text-purple-700 text-lg pt-4'>Contact us</Link>
            <Link href={"/faq"} className='text-purple-700 text-lg pt-4'>FAQ</Link>
            <Link href={"/auth/login"} className='text-purple-700 text-lg pt-4'>Login</Link>
            <Link href={"/auth"} className='text-white bg-purple-700 py-4 rounded-full px-8 text-center h-14'>Sign Up</Link>
        </div>
    </div>  
  )
}

export default MainNavBar