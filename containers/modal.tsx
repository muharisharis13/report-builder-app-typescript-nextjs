import { useState,Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react';
import Image from "next/image";
import Card from "../public/cardHover.png";
import Link from "next/link"

function MyDialog(props:{isOpen:boolean, setIsOpen:Function}) {
  let {isOpen, setIsOpen} = props

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={()=>setIsOpen()}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-sm">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Choose Slide
              </Dialog.Title>

              {/* CONTENT ========== */}
              <div className='text-center flex items-center justify-center'>
                <div className="wrap-thumbnail mt-10 flex gap-10 justify-center flex-wrap">
                  {
                    [2,2,2,2,2,2].map((item:any,idx:number)=>(
                      <Link href='/builder/builder'>
                        <a >
                          <div className="card cursor-pointer" key={idx}>
                            <Image src={Card} alt="" />
                            <p className='text-content text-sm text-center'>
                              Lorem, ipsum.
                            </p>
                          </div>
                        </a>
                      </Link>
                    ))
                  }
                </div>

              </div>

              
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default MyDialog;