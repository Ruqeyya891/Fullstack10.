import React from 'react'
import AboutHeader from '../Header/AboutHeader'
import { Outlet } from 'react-router'
import AboutFooter from '../Footer/AboutFooter'

const AboutLayout = () => {
  return (
    <div>
        <AboutHeader/>
        <Outlet/>
        <AboutFooter/>
    </div>
  )
}

export default AboutLayout