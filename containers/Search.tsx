import React from 'react'
import {SearchIcon} from "@heroicons/react/outline"

const Search = () => {
  return (
    <div className='relative'>
      <SearchIcon width={20} className="absolute left-4 top-1/4" />
      <input type="text" placeholder='search' 
        className=' w-96 border p-1 pl-10 placeholder:text-slate-400 focus:outline-none rounded-sm border-cyan-500'
        
        />
    </div>
  )
}

export default Search