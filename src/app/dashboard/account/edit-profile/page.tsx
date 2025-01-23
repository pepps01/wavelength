import React from 'react'
import Profile from '@/components/specific/Profile'
import ControlButtonList from '@/components/specific/ControlButtonList'
import Input from '@/components/specific/Input'
import Button from '@/components/specific/Button'
import ControlButton from '@/components/specific/ControlButton'
import RootLayout from '@/app/layout'
import Link from 'next/link'
import { GoArrowLeft } from "react-icons/go";
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
    <RootLayout  title={"auth"}>
        {/* <Profile/> */}
        <Link href={"/"} className='flex flex-row gap-4 justify-center align-middle'>
            <GoArrowLeft />
              <div className=''>Profile Information</div>
        </Link>
        <div className='px-2 py-4 rounded-lg  w-full mx-auto max-w-[400px] mt-4 '>
            <form>
                <Input type={"text"} label={"Email"} placeholder={"Email"}/>
                <Input type={"text"} label={"First Name"} placeholder={"First name"}/>
                <Input type={"text"} label={"Middle Name (Optional)"} placeholder={"Middle name"}/>
                <Input type={"text"} label={"Last Name"} placeholder={"Last name"}/>
                <Input type={"text"} label={"Phone Number"} placeholder={"Phone Number"}/>
                <Input type={"text"} label={"Residential Address"} placeholder={"Phone Number"}/>
                <Input type={"text"} label={"Postal Code"} placeholder={"234"}/>
                <Input type={"text"} label={"City"} placeholder={"City"}/>
                <Input type={"text"} label={"Date of Birth"} placeholder={"234"}/>

                <div className='text-sm mt-4 text-blue-900 bg-blue-100 px-4 py-2 rounded-md'>
                        <label for="option1">
                          <input type="checkbox" id="option1" name="options" value="option1" className='mr-2'/>
                             Do make sure your name matches the name on your government issued account or your transfers might be delayed
                        </label>
                </div>
                <ControlButton buttonName='Save Changes' />
            </form>
        </div>
    </RootLayout>
  )
}

export default page