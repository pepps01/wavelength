import ControlButton from '@/components/specific/ControlButton'
import Input from '@/components/specific/Input'
import Link from 'next/link'
import React from 'react'
import AuthLayout from './layout'

function page() {
  return (
    <AuthLayout>
      <div className='px-8 py-4 rounded-lg bg-white w-full mx-auto max-w-[400px] mt-4 '>
        <div className='flex  flex-col align-middle justify-center text-center'>

         <div className='text-center text-2xl mt-4 mb-4'>Log In or Sign Up</div>
          <button className='w-full flex flax-row align-middle justify-center text mt-4 text-center border border-black py-2 rounded-full max-w[200px] hover:bg-purple-700 hover:text-white'>
            Continue with Apple
          </button>

          
          <div className='mt-6'>or</div>
          </div>

        <div className=''>
            <Input type='email' label='Email address' placeholder='name@email.com'/>
            <ControlButton buttonName='Continue'/>

            <div className='text-center mt-2'>
              <Link href={"/auth/register"} className='text-purple-500 text-sm text-center'>Sign Up</Link>
            </div>
            
            <div className='text-center mt-4'>
              By continuing, you accept our <Link href={"/terms"} className='text-purple-800 font-medium'>Terms of use </Link> and <Link href={"/privacy"} className='text-purple-800 font-medium'>Privacy Policy</Link>
            </div> 
        </div>
      </div>
    </AuthLayout>
  )
}

export default page