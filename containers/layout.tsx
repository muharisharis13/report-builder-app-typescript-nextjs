import React from 'react'
import Header from './Header'
import { useRouter } from 'next/router'


const Layout = (props:{children:any}) => {
  const {children} = props
  const router = useRouter()
  return (
    <div>
      <section>
        <Header />
      </section>
      <section className={`${router.pathname === "/" || router.pathname === "/builder/builder" ? null:"ml-24"}`} style={{marginTop:"93px"}}>
        {children}
      </section>
    </div>
  )
}

export default Layout