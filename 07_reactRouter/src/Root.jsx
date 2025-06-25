import React from 'react'
import { Outlet } from 'react-router'
import { Header, Footer } from './components/index.js'

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