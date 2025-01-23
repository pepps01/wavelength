import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function AuthNavBar() {
  return (
    <div className='flex flex-row justify-between align-middle py-4 w-full max-w-[1256px] mx-auto border-2 rounded-full px-8 mt-4 border-dotted'>
             <Image
                className="dark:invert"
                src="/Logo.png"
                alt="Company Logo"
                width={100}
                height={38}
                priority
            />
        <div className='flex flex-row gap-8 align-bottom justify-center'>
            <Link href={"/contact"} className='text-lg pt-4 font-semibold'>Support</Link>
        </div>
    </div>  
  )
}

export default AuthNavBar