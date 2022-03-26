import React from 'react'
import Header from '../../containers/Header'
import BuilderContent from '../../containers/BuilderContent'
import Footer from '../../containers/Footer'
import SlideThumbnail from '../../containers/SlideThumbnail'
import RightMenu from '../../containers/RightMenu'
import SlideEditor from '../../containers/SlideEditor'


type Props = {}

export default function builder({}: Props) {
  return (
    <div className='flex flex-col h-screen'>
      {/* <Header/> */}
      <BuilderContent>
        <SlideThumbnail/>
        <SlideEditor/>
        <RightMenu/>
      </BuilderContent>
      <Footer/>
    </div>
  )
}