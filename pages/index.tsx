import type { NextPage } from 'next'
import {useState} from "react"
import Head from 'next/head'
import Image from 'next/image'
import Card from "../public/cardHover.png";
import Bg from "../public/gambaruhuyy.png";
import {DocumentAddIcon} from "@heroicons/react/solid";
import * as Containers from "../containers"

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className='w-full h-screen px-20 mb-60 ' id="idx-gallery">
      <Head>
        <title>HOME</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* MODAL========== */}
        <Containers.Modal isOpen={isOpen} setIsOpen={()=>setIsOpen(false)} />
      {/* MODAL========== */}
      
      {/* list template */}

      <div className="wrap-list-template block mt-5">
        <p className='text-black font-semibold mb-5'>
          Last template
        </p>
        {/* list thumbnail */}
        <div className="flex flex-wrap gap-11">
          {
            [2,2,2,2,2,2].map((item:any,idx:number)=>(
              <div className="card" key={idx}>
                <Image src={Card} alt="" />
                <p className='text-content text-sm text-center'>
                  Lorem, ipsum.
                </p>
              </div>
            ))
          }
        </div>
      </div>

      {/* background dan button */}
      <div className="wrap-background-button mt-10">
        <div className="wrap-image text-center">
          <Image src={Bg} />
        </div>
        <p className="text text-center font-semibold">
          Hello <span className='font-bold'>Budi Baik</span>, Welcome to Report Builder
        </p>
        <div className="wrap-button-with-text flex items-center justify-center gap-3 font-semibold mt-2 ">
          Click {" "} 
          <button 
            className='btn-add-slide flex flex-wrap items-center justify-center text-center border  py-1 w-auto px-1 border-cyan-600 rounded-sm text-cyan-600'
            onClick={()=>setIsOpen(true)}
            >
            Add Slide <DocumentAddIcon width={20} />
          </button> 
          {" "}button to make new slide
        </div>
      </div>
      
      
    </div>
  )
}

export default Home
