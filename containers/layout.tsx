import React from 'react'
import Header from './Header'

const Layout = (props:{children:any}) => {
  const {children} = props

  return (
    <div>
      <section>
        <Header />
      </section>
      <section>
        {children}
      </section>
    </div>
  )
}

export default Layout