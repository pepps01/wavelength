'use client'
import React, { useState } from 'react'
import ControlButton from './ControlButton'
import Image from "next/image";

function MoneyCard() {
    const [baseCurrency, setBaseCurrency] = useState("$")
    const [currency, setCurrency] = useState("£")
    const [basePrice, setBasePrice] = useState("0.00")
    const [sendPrice, setsendPrice] = useState("0.00")

    
    return (
        <div className='rounded-2xl shadow-[5px_5px_15px_15px_rgba(0,0,0,0.1)] py-12 px-16 w-full max-w-[600px]' style={{background:"#FEF9F3"}}>
            <div className='flex flex-row justify-between align-middle bg-white px-3 py-2 rounded-md'>
                <div className='gap-2'>
                    <div className='text-md'>You Send </div>
                    <div className='text-2xl font-medium mt-2'>{baseCurrency} <input type='text' className='outline-none text-black ' placeholder={basePrice} /></div>
                </div>
                <div className="text-xl font-semibold py-4">
                        <Image
                            className="dark:invert"
                            src="/USD.png"
                            alt="Next.js logo"
                            width={100}
                            height={100} 
                            priority
                        />
                </div>
            </div>

            <div className='px-4 py-2'>
                <div className='flex flex-row justify-between align-middle mt-4'>
                    {/* fee */}
                    <div className='flex flex-row gap-1 justify-start flex-start align-middle'>
                          <Image
                                className="dark:invert"
                                src="/Fee.png"
                                alt="Next.js logo"
                                width={25}
                                height={25} 
                                priority
                             />
                        <div className='text-md'>Fee</div>
                    </div>
                    <div className='text-green-500 text-md'>FREE</div>
                </div>
                <div className='flex flex-row justify-between align-middle mt-4'>
                    {/* fee */}
                    <div className='flex flex-row gap-1 justify-start flex-start align-middle'>
                        <Image
                            className="dark:invert"
                            src="/TotalPay.png"
                            alt="Next.js logo"
                            width={25}
                            height={25} 
                            priority
                        />
                        <div className='text-md'>Total to pay</div>
                    </div>
                    <div className="text-md ">0.120GBP</div>
                </div>
                <div className='flex flex-row justify-between align-middle mt-4'>
                    {/* fee */}
                    <div className='flex flex-row gap-1 justify-start flex-start align-middle'>
                        <Image
                            className="dark:invert"
                            src="/Rate.png"
                            alt="Next.js logo"
                            width={25}
                            height={25} 
                            priority
                        />
                        <div className='text-md'>Rate</div>
                    </div>
                    <div className='text-md text-slate-600'>1USd = 0.120GBP</div>
                </div>
            </div>

            <div className='flex flex-row justify-between align-middle bg-white px-3 py-2 rounded-md mt-4'>
                <div className='gap-2'>
                    <div className='text-md'>Reciever Gets</div>
                    <div className='text-2xl font-medium mt-2'>{currency}{sendPrice} </div>
                </div>
                <div className="text-xl font-semibold py-4 ">
                        <Image
                                className="dark:invert"
                                src="/GBP.png"
                                alt="Next.js logo"
                                width={100}
                                height={100} 
                                priority
                             />
                </div>
            </div>
            <div className='flex flex-col justify-start mt-4  mb-8'>
                {/* delivery method */}
                <div>DELIVERY METHOD</div>
                <div className='flex flex-row flex-start justify-start bg-white p-4 align-middle mt-2 border hover:border-purple-800 rounded-md gap-4'>
                    <div>
                        <Image
                            className="dark:invert"
                            src="/DeliveryMethod.png"
                            alt="Next.js logo"
                            width={50}
                            height={50} 
                            priority
                        />
                    </div>
                    <div className=''>
                        <div className='font-semibold mb-2'>Send to an E Bank Account</div>
                        <div>Transfer within minutes</div>
                    </div>
                </div>
            </div>
            <ControlButton buttonName="Send Money" />
    </div>
  )
}

export default MoneyCard