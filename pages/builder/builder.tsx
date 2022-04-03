import React from 'react'
import Header from '../../containers/Header'
import BuilderContent from '../../containers/BuilderContent'
import Footer from '../../containers/Footer'
import SlideThumbnail from '../../containers/SlideThumbnail'
import RightMenu from '../../containers/RightMenu'
import SlideEditor from '../../containers/SlideEditor';
import * as Containers from "../../containers"


type Props = {}

export default function builder({}: Props) {
  return (
    <Containers.Layout>
      <div className='flex flex-col h-screen'>
        {/* <Header/> */}
        <BuilderContent>
          <SlideThumbnail/>
          <SlideEditor/>
          <RightMenu/>
        </BuilderContent>
        {/* <Footer/> */}
      </div>
    </Containers.Layout>
  )
}