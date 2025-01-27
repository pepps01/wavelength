"use client";
import { useFormik } from 'formik';

import ControlButton from '@/components/specific/ControlButton'
import Input from '@/components/specific/Input'
import Link from 'next/link'
import React, { useState } from 'react'
import * as Yup from 'yup';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useStore } from '@/store/useStore';
import { loginSchema } from '@/apis/validationState';


function page() {

  const submitForm = useStore((state) => state.submitForm);
  const loading = useStore((state) => state.loading);
  const error = useStore((state) => state.error);
  const submittedData = useStore((state) => state.submittedData);

  const setEmail = useStore((state)=> state.setEmail)
  const email = useStore((state)=> state.auth.email)

  //  // Form submission handler
  //  const onSubmit = async (values:any) => {
  //    console.log("submitting...", values)
  //    await submitForm(values);  
  //    console.log("submitted", values)
  //  };

   const handleSubmit = (values: any)=>{
  console.log("Email", email)

    console.log("Weldone")
    setEmail(values)
    const token = localStorage.getItem('token');

    if(token){
      window.location.href="/pin";
    }else{
      window.location.href="/pin/create"
    }
   }

   const handleEmailChange = (newEmail: any) => {
    console.log("email",newEmail)
    setEmail(newEmail)
};



  return (
    <div className='px-8 py-4 rounded-lg bg-white w-full mx-auto max-w-[400px] mt-4 '>
      <div className='flex  flex-col align-middle justify-center text-center'>

      <div className='text-center text-2xl mt-4 mb-4'>Log In or Sign Up</div>
        <button className='w-full flex flax-row align-middle justify-center text mt-4 text-center border border-black py-2 rounded-full max-w[200px] hover:bg-purple-700 hover:text-white'>
          Continue with Apple
        </button>
        <div className='mt-6'>or</div>
        </div>

        <Formik
          initialValues={{ email }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              label="Email"
              onChange={handleEmailChange} 
              className="outline-none mt-2"
              error={false}
            />
            <ControlButton type="button" text="Submit"/>
          </Form>
        </Formik>
          <div className='text-center mt-4'>
            By continuing, you accept our <Link href={"/terms"} className='text-purple-800 font-semibold'>Terms of use </Link> and <Link href={"/privacy"} className='text-purple-800  font-semibold'>Privacy Policy</Link>
          </div> 
      </div>
  )
}

export default page