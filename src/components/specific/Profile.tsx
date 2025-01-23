import React from 'react'
import Image from "next/image";

function Profile() {
  return (
    <div className='flex'>
      <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div>Tier 1</div>
        <div className='bg-green-500 px-4 py-2 border-none rounded-md text-white font-normal cursor-pointer'>
            Edit Profile
        </div>
    </div>
  )
}

export default Profile