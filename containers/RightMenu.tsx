import React from 'react';
import {DocumentAddIcon} from "@heroicons/react/solid";
import Input from "./Input";
import DatePicker from "react-datepicker"

type Props = {}

export default function RightMenu({}: Props) {
  return (
    <div className='wrap-side-bar bg-white w-60'>
      <div className="wrap-slide-preview flex items-center justify-between bg-gray-100 border p-2">
        <p className='font-semibold text-blue-700'>
          Cover
        </p>
        <button className='border flex w-auto items-center justify-center border-blue-700 px-2 py-1 rounded-sm'>
          <p className='font-semibold text-blue-700 text-sm'>
            Add Slide
          </p>
          <DocumentAddIcon width={20} className="text-blue-700" />
        </button>
      </div>
      <div className="wrap-preview pt-5 flex flex-col gap-5 border h-full">
        {/* row 1 */}
        <div className="p-2">
            <div className="mb-3">
              <label htmlFor="Document Title">Document Title</label>
              <Input />
            </div>

            <div className="mb-3 flex flex-col">
              <label htmlFor="Client">Client</label>
              
              <select className='w-full border h-8 px-2 focus:outline-none rounded-sm text-gray-400'>
              <option>--Select--</option>
              {
                [2,2,2,2,2].map((item:any,idx:number)=>(
                  <option key={idx} value={idx+1}>{idx+1}</option>
                ))
              }
              </select>

            </div>

            <div className="mb-3 flex flex-col">
              <label htmlFor="Client">Container</label>
              
              <select className='w-full border h-8 px-2 focus:outline-none rounded-sm text-gray-400'>
              <option>--Select--</option>
              {
                [2,2,2,2,2].map((item:any,idx:number)=>(
                  <option key={idx} value={idx+1}>{idx+1}</option>
                ))
              }
              </select>

            </div>
            <div className="mb-3 flex flex-col">
              <label htmlFor="Client">Date</label>
              
              <DatePicker selected={new Date()} className="border rounded-sm focus:outline-none px-2 h-8 w-full cursor-pointer" />

            </div>
            <div className="mb-3 flex flex-col">
              <label htmlFor="Client">Type of Report</label>
              
              <select className='w-full border h-8 px-2 focus:outline-none rounded-sm text-gray-400'>
              <option>--Select--</option>
              {
                [2,2,2,2,2].map((item:any,idx:number)=>(
                  <option key={idx} value={idx+1}>{idx+1}</option>
                ))
              }
              </select>

            </div>
        </div>

        {/* ROW 2===== */}

        <div className="row-3 border-t p-2 overflow-x-hidden">
          <div className="title-text mb-10">
            <p className="font-semibold">
              Image
            </p>
          </div>

          <div className=" mb-8">
            <label htmlFor="Document Title">Background</label>
            <input type="file" name="" id="" className='w-auto file:text-sm file:border-none file:p-2 file:font-semibold file:rounded-xl' />
          </div>
          <div className="mb-8">
            <label htmlFor="Document Title">Main Image</label>
            <input type="file" name="" id="" className='w-auto file:text-sm file:border-none file:p-2 file:font-semibold file:rounded-xl' />
          </div>
          <div className="mb-8">
            <label htmlFor="Document Title">Image 1</label>
            <input type="file" name="" id="" className='w-auto file:text-sm file:border-none file:p-2 file:font-semibold file:rounded-xl' />
          </div>
          <div className="mb-8">
            <label htmlFor="Document Title">Image 2</label>
            <input type="file" name="" id="" className='w-auto file:text-sm file:border-none file:p-2 file:font-semibold file:rounded-xl' />
          </div>
        </div>
      </div>
    </div>
  )
}