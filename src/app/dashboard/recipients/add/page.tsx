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
                <Input type={"text"} label={"Recipient Country"} placeholder={"United States"}/>
                <Input type={"text"} label={"Delivery Method"} placeholder={"Send to USD Bank Account"}/>
                <Input type={"email"} label={"Email"} placeholder={"Email Address"}/>
                <Input type={"text"} label={"Account Number"} placeholder={"Account Number"}/>
                <Input type={"text"} label={"Full Name"} placeholder={"Full Name"}/>
                <Input type={"text"} label={"Beneficiary Address"} placeholder={"Enter Location"}/>
                <Input type={"text"} label={"City"} />
                <Input type={"text"} label={"State"}/>
                <Input type={"text"} label={"Postal Code"} placeholder={""}/>
                <ControlButton buttonName='Confirm' />
            </form>
        </div>

        <Navigator/>

    </RootLayout>
  )
}

export default page