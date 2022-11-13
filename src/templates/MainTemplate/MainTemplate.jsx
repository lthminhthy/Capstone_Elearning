import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'

import Footer from '../../components/Footer/Footer'
import { Outlet } from 'react-router'



const MainTemplate = () => {
 
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>



  )
}

export default MainTemplate
