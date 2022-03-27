import React,{Fragment} from 'react';
import Logo from "../public/Group84.svg"
import Image from "next/image"
import {GlobeAltIcon} from "@heroicons/react/outline";
import {useTheme} from "next-themes";
import Toggle from "./toggle";
import Dropdown from "./dropdown"
import Link from "next/link";
import {useRouter} from "next/router"

type Props = {}

const list_menu = [
  {
    name:"Profile",
    path:"/profile"
  },
  {
    name:"User Management",
    path:"/userManagement"
  },
  {
    name:"Logout",
    path:"/logout"
  },
]

const nav_data = [
  {
    name:"Gallery",
    path:"/gallery"
  },
  {
    name:"Report Builder",
    path:"/"
  },
  {
    name:"History",
    path:"/history"
  },
  {
    name:"My Template",
    path:"/template"
  },
  {
    name:"Scenario",
    path:"/scenario"
  },
]

function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function Header({}: Props) {
  const {theme, setTheme} = useTheme()
  const router = useRouter()

  return (
    <div className='bg-red-500 block flex-row px-20 pt-3 text-white'>
      <div className="flex justify-between items-center grow">
        <div className="">
          <Link href="/">
            <a>
              <Image width={120} src={Logo} alt="logo" className='cursor-pointer'  />
            </a>
          </Link>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="flex gap-x-2 items-center wrap-globe-toggle">
            <GlobeAltIcon width={30} />
            <Toggle />
          </div>
          {/* account */}
          <div className="wrap-account">
            <div>

              <Dropdown list_menu={list_menu}>
                <div className="flex items-center gap-2 font-semibold cursor-pointer">
                  <p>
                    Baik Budi
                  </p>
                  <div className='rounded-full object-cover border-2 border-solid border-stone-100 p-1'>
                    <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" alt="" 
                    className="rounded-full object-cover" 
                    width={30} 
                    height={30} />
                  </div>
                </div>
              </Dropdown>

            </div>
          </div>
        </div>
      </div>

      {/* navigation ======= */}
      <div className="wrap-navigation ml-32 flex items-center">
        {
          nav_data.map((item:any,idx:number)=>(
            <Link href={item.path} key={idx}>
              <a 
                className={`px-2 py-1 hover:bg-white hover:text-red-500 ${item.path === router.pathname ? `bg-white text-red-500` :`text-white`}`}
              >
                {item.name}
              </a>
            </Link>
          ))
        }
      </div>
    </div>
  )
}