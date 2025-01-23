import Image from 'next/image'
import React from 'react'

function AppStoreDownload() {
  return (
    <div className='px-4 py-6 flex flex-row gap-4 flex-start justify-start align-middlegap-2 border border-dotted border-black rounded-2xl mt-4 max-w-[500px] '>
        <div>
            <Image
                    className="dark:invert"
                    src="/QR.png"
                    alt="Next.js logo"
                    width={100}
                    height={20} 
                    priority
              />
        </div>
        <div className='flex flex-col justify-start align-middle'>
            <div className='text-md text-gray-700'>Scan to download app. Available on Appstore and Playstore</div>
          
            <div className='flex flex-row justify-start align-middle gap-4 '>
                {/* icon */}
                <div>
                    <Image
                        className="dark:invert"
                        src="/Apple.png"
                        alt="Next.js logo"
                        width={30}
                        height={20} 
                        priority
                  />
                </div>
                <div>
                    <Image
                        className="dark:invert"
                          src="/Playstore.png"
                          alt="Next.js logo"
                          width={30}
                          height={20} 
                          priority
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppStoreDownload