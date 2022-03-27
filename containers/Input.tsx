import React from 'react'

const Input = (props:{placeholder:string}) => {
  const {placeholder} = props

  return <input type="text" className='mt-1 block w-full px-3 py-1 bg-white border border-slate-300 rounded-sm text-sm shadow-sm placeholder-slate-400
  focus:outline-none focus:border-sky-500 focus:ring-sky-500
disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none' 
  placeholder={placeholder}
/>
}

Input.defaultProps ={
  placeholder:"Placeholder"
}

export default Input