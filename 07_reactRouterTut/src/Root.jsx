import React from 'react'
import { Home, Footer, Header } from './components'
import { Outlet } from 'react-router'

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Root