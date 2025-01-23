import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navigator() {
  return (
    <div className='flex flex-row justify-around align-baseline gap-4 rounded-full  border shadow-lg px-4 py-4 mt-10'>
        <Link href={"/"} className=''>
        <Image
                    className="dark:invert"
                    src="/Home.png"
                    alt="Next.js logo"
                    width={40}
                    height={40} 
                    priority
                />
        </Link>

        <Link href={"/dashboard/transactions"} className=''>
        <Image
                    className="dark:invert"
                    src="/transactions.png"
                    alt="Next.js logo"
                    width={40}
                    height={40} 
                    priority
                />
        </Link>

        <Link href={"/dashboard/recipients"} className=''>
        <Image
                    className="dark:invert"
                    src="/recipients.png"
                    alt="Next.js logo"
                    width={40}
                    height={40} 
                    priority
                />
        </Link>

        <Link href={"/dashboard/account"} className=''>
        <Image
                    className="dark:invert"
                    src="/account.png"
                    alt="Next.js logo"
                    width={40}
                    height={40} 
                    priority
                />
        </Link>
    </div>
  )
}

export default Navigator