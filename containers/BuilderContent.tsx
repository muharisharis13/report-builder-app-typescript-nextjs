import React from 'react'

type Props = {
  children :{},
}

export default function BuilderContent({children}: Props) {
  return (
   
      
      <div className='flex flex-row flex-grow'>{children}</div>
    
    
  )
}