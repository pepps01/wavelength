'use client'

import React from 'react'
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { FiX } from "react-icons/fi";


const Modal =()=> {
    const [open, setOpen] = useState(true)

    return (
    <Dialog open={open} onClose={setOpen} className="relative z-10 ">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-md data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
           <div className='bg-white px-4 py-4 flex flex-row-reverse'>
              <div className='font-medium text-2xl text-amber-900'><FiX /></div>
            </div>
            <div className='bg-white px-4 py text-center'>
              <div className='font-medium text-2xl text-amber-900'>Welcome to Send App</div>
            </div>
            <div className="bg-white px-4 pb-4 pt sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                  <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
                </div>
                <div className=" text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h4" className="text-base font-medium text-brown-900">
                    Send Money
                  </DialogTitle>
                  <div className="mt">
                    <p className="text-sm text-gray-500">
                      Transfer funds across borders using any of the available payment methods on the app
                    </p>
                  </div>
                </div>
              </div>

              <div className="sm:flex sm:items-start mt-4">
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                  <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
                </div>
                <div className="mt-2 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h4" className="text-base font-medium text-brown-900">
                    Transactions
                  </DialogTitle>
                  <div className="mt">
                    <p className="text-xs text-gray-500">
                     Check the details and status of all your payments in one dashboard.
                    </p>
                  </div>
                </div>
              </div>

              <div className="sm:flex sm:items-start mt-4">
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                  <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
                </div>
                <div className="mt-2 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h4" className="text-base font-medium text-brown-900">
                    Recipients
                  </DialogTitle>
                  <div className="mt">
                    <p className="text-xs text-gray-500 ">
                     Add and/or edit the information of people who recieve money from you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="sm:flex sm:items-start mt-4">
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                  <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
                </div>
                <div className="mt-2 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h4" className="text-base font-medium text-brown-900">
                    Profile
                  </DialogTitle>
                  <div className="mt">
                    <p className="text-xs text-gray-500">
                      Find your personal detials provided during signup. Easily updated your info anytime.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full px-4 py-3 sm:flex sm:flex-row sm:justify-center sm:px-6">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-fullinline-flex  justify-center rounded-3xl bg-purple-800 px-5 py-4 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto "
              >
                Okay
              </button>
 
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

export default Modal