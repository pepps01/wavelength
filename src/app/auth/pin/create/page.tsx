import ControlButton from '@/components/specific/ControlButton'
import Input from '@/components/specific/Input'
import Link from 'next/link'
import React from 'react'
import RootLayout from '@/app/layout'

function page() {
  return (
    <RootLayout title='auth'>
      <div className='px-8 py-4 rounded-lg  w-full mx-auto max-w-[400px] mt-4 '>
        <div className='flex  flex-col align-middle justify-center text-center'>
          <div className='text-center text-2xl mt-4 mb-4 text-amber-950'>Enter PIN</div>
          <div className='text-center text-md text-amber-950'>Enter your PIN to continue.</div>
        </div>

        <div className='flex flex-row gap-2 justify-center align-middle my-8'>
            <input type="text" className='border hover:border-purple-900 p-2 rounded-lg bg-white max-w-12 '/>
            <input type="text" className='border hover:border-purple-900 p-2 rounded-lg bg-white max-w-12'/>
            <input type="text" className='border hover:border-purple-900 p-2 rounded-lg bg-white max-w-12'/>
            <input type="text" className='border hover:border-purple-900 p-2 rounded-lg bg-white max-w-12'/>
        </div>
        <div className=''>
            <ControlButton text='Continue' type='button' />
            <div className='text-center mt-4'>
                <Link href={"/privacy"} className='text-purple-800 font-medium'>Forgotten your PIN?</Link>
            </div> 
        </div>
      </div>
    </RootLayout>
  )
}

export default page