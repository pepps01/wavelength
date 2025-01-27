'use client'
import React, { useCallback, useState } from 'react'
import ControlButton from './ControlButton'
import Image from "next/image";
import { useStore } from '@/store/useStore';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { sendMoneySchema } from '@/apis/validationState';
import Input from './Input';
import { useRouter } from 'next/router';
import { debounce } from 'lodash';

function MoneyCard() {
    const [baseCurrency, setBaseCurrency] = useState("$")
    const [currency, setCurrency] = useState("£")

    const send_amount = useStore((state) => state.transaction.sender_amount)
    const total_pay = useStore((state) => state.transaction.total_pay)
    const exchange_rate = useStore((state) => state.transaction.exchange_rate)
    const setTotalPayAmount = useStore((state) => state.setTotalPayAmount)
    const setSenderAmount = useStore((state) => state.setSenderAmount)


    const debouncedSetTotalPayAmount = useCallback(
        debounce((newAmount: number) => {
          setTotalPayAmount(newAmount); 
        }, 2000), 
        [] 
      );

    const handleChange =(e:any)=> {
        const { name, value } = e.target;
        console.log("Changes", value);
        debouncedSetTotalPayAmount(value)
    }
    const [email, setEmail] = useState('');
    
    const handleEmailChange = (newEmail: any) => {
        setSenderAmount(newEmail);
        debouncedSetTotalPayAmount(send_amount);
        // setEmail(newEmail); 
    };



    const onSubmit =()=>{
        const token =  localStorage.getItem('token')
        console.log("submission");
        if (token){
           window.location.href ="/dashboard/recipient"
        }else{
            window.location.href ="/auth"
        }
    }

    return (
        <div className='rounded-2xl shadow-[5px_5px_15px_15px_rgba(0,0,0,0.1)] py-12 px-16 w-full max-w-[600px]' style={{background:"#FEF9F3"}}>
        <Formik
          initialValues={{ send_amount, total_pay}}
          validationSchema={sendMoneySchema}
          onSubmit={onSubmit}
        >
        <Form>
            <div className='flex flex-row justify-between align-middle bg-white px-3 py-2 rounded-md'>
                <div className='gap-2'>
                    <div className='text-md'>You Send </div>
                    <div className='text-2xl font-medium mt-2 flex flex-row justify-start align-middle  gap-2'>
                        <div className='text-md py-1'>
                            {baseCurrency}
                        </div>
                        <Input
                            label=""
                            type="text"
                            name="send_amount"
                            value={send_amount}
                            onChange={handleEmailChange} 
                            placeholder={send_amount.toString()}
                            className="outline-none text-black py-0 border-0 my-0 px-0"
                            error={false}
                        />
                    </div>
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
                    <div className="text-md ">{currency}{total_pay.toFixed(2)} GBP</div>
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
                    <div className='text-md text-slate-600'>1USd = {exchange_rate} GBP</div>
                </div>
            </div>

            <div className='flex flex-row justify-between align-middle bg-white px-3 py-2 rounded-md mt-4'>
                <div className='gap-2'>
                    <div className='text-md'>Reciever Gets</div>
                    <div className='text-2xl font-medium mt-2'>{currency}{total_pay.toFixed(2)} </div>
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
                <div className='text-sm'>DELIVERY METHOD</div>
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
                        <div className='font-semibold mb-2'>Send to an USD Bank Account</div>
                        <div>Transfer within minutes</div>
                    </div>
                </div>
            </div>
            <ControlButton text="Send Money" type='submit'/>

            </Form>
            </Formik>
    </div>
  )
}

export default MoneyCard