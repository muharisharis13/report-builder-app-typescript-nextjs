import React from 'react'
import {PencilIcon,TrashIcon} from "@heroicons/react/solid";
import BgIamgeSlide from "../public/bg-mage-slide.png"

type Props = {}

export default function SlideEditor({}: Props) {
  return (
    <div className='flex-grow content-center p-2 text-center'>
      <div className="w-full border mt-10">
        <div className="wrap-button flex items-center justify-end">
          <button className=' bg-slate-200 w-6 h-6 flex items-center justify-center'>
            <PencilIcon width={20} className=" text-gray-500" />
          </button>
          <button className=' bg-slate-200 w-6 h-6 flex items-center justify-center'>
            <TrashIcon width={20} className=" text-gray-500" />
          </button>
        </div>

        {/* slide content */}
        <div id="wrap-slider-editor" className="wrap-silder bg-white">
          
        </div>
      </div>
    </div>
  )
}

