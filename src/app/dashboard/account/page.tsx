import React from 'react'
import DashboardLayout from '../layout'
import Profile from '@/components/specific/Profile'
import ControlButtonList from '@/components/specific/ControlButtonList'
import Input from '@/components/specific/Input'
import Button from '@/components/specific/Button'
import ControlButton from '@/components/specific/ControlButton'
import RootLayout from '@/app/layout'
import Image from 'next/image'
import Link from 'next/link'
import { RxCaretRight } from "react-icons/rx";
import Navigator from '@/components/specific/Navigator'


function page() {

const data = [
     {
        "title": "Account Settings",
        "buttonLink": "",
        "buttonLinkName": "Account Limits",
        "buttonImage":"",
        "buttonLink1": "",
        "buttonLinkName1": "Payment Method",
        "buttonImage2":""
     },
    {
        "title": "Promotions",
        "buttonLink": "",
        "buttonLinkName": "Referrals",
        "buttonImage":""
    },
    {
        "title": "Security",
        "buttonLink": "",
        "buttonLinkName": "Change Pin",
        "buttonImage":""
    }, 
    {
        "title": "Notification",
        "buttonLink": "",
        "buttonLinkName": "Recieve notification about discount product",
        "buttonImage":""
    }, 
    {
        "title": "Help and Support",
        "buttonLink": "",
        "buttonLinkName": "Contact Us",
        "buttonImage":"",
        "buttonLink1": "",
        "buttonLinkName1": "FAQs",
        "buttonImage1":""
    }, 
    {
        "title": "About Us",
        "buttonLinkName":[
            {
                "buttonLink": "",
                "buttonLinkName": "Terms and Conditions",
                "buttonImage":""
            },
            {
                "buttonLink": "",
                "buttonLinkName": "Privacy Policy",
                "buttonImage":""
            },
        ]
    }, 
]
  return (
    <RootLayout title='auth'>
        {/* <Profile/> */}
        <div className='mx-auto max-w-[400px] text-center mb-4 mt-4'>
              <Image
                  className="dark:invert flex justify-self-center mb-8"
                  src="/profile.png"
                  alt="Company Logo"
                  width={100}
                  height={50}
                  priority
                 />
            {/* <div className='text-lg text-center text-amber-950 mt-4 mb-8'>You don't have any recipients yet</div> */}
            {/* <ControlButton buttonName='Add New Recipients'/> */}
            <Link href={"/dashboard/account/edit-profile"} className='w-100 py-3 px-20 text-white rounded-full mt-8 bg-purple-800 hover:opacity-5 hover:cursor-pointer '>Edit Profile</Link>
        </div>


        <div className='px-8 py-4 rounded-lg  w-full mx-auto max-w-[400px] mt-4 hover:opacity-6 hover:cursor-pointer'>
            <div className='text-amber-950 mb-2'>Account Settings</div>


            <div className='flex flex-row justify-between align-middle py-2 px-4 rounded-md bg-white'>
                 <div className='flex flex-row flex-start justify-start align-middle gap-4'>
                    <Image
                        className="dark:invert flex justify-self-center"
                        src="/AccountLimits.png"
                        alt="Company Logo"
                        width={30}
                        height={25}
                        priority
                    />
                    <div>Account Limits</div>
                  </div>
                  
                  <div className=''>
                         <RxCaretRight />
                  </div>
            </div>

            <div className='flex flex-row justify-between align-middle py-2 px-4  rounded-md bg-white mt-2 hover:opacity-6 hover:cursor-pointer'>
                 <div className='flex flex-row flex-start  align-middle justify-start gap-4'> 
                    <Image
                        className="dark:invert flex justify-self-center"
                        src="/PaymentMethod.png"
                        alt="Company Logo"
                        width={30}
                        height={25}
                        priority
                    />
                    <div>Payment Methods</div>
                  </div>


                  <div className=''>
                         <RxCaretRight />
                  </div>
            </div>
        </div>
        
        <div className='px-8 py-4 rounded-lg  w-full mx-auto max-w-[400px] mt-4 hover:opacity-6 hover:cursor-pointer'>
            <div className='text-amber-950 mb-2'>Help and Support</div>


            <div className='flex flex-row justify-between align-middle py-2 px-4 rounded-md bg-white'>
                 <div className='flex flex-row flex-start justify-start align-middle gap-4'>
                    <Image
                        className="dark:invert flex justify-self-center"
                        src="/Envelope.png"
                        alt="Company Logo"
                        width={30}
                        height={25}
                        priority
                    />
                    <div>Contact Us</div>
                  </div>
                  
                  <div className=''>
                         <RxCaretRight />
                  </div>
            </div>

            <div className='flex flex-row justify-between align-middle py-2 px-4  rounded-md bg-white mt-2 hover:opacity-6 hover:cursor-pointer'>
                 <div className='flex flex-row flex-start  align-middle justify-start gap-4'> 
                    <Image
                        className="dark:invert flex justify-self-center"
                        src="/Faqs.png"
                        alt="Company Logo"
                        width={30}
                        height={25}
                        priority
                    />
                    <div>FAQs</div>
                  </div>


                  <div className=''>
                         <RxCaretRight />
                  </div>
            </div>

            <Navigator/>
        </div>
    </RootLayout>
  )
}

export default page