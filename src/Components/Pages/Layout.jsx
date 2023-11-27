import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar/Navbar'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <div style={{backgroundColor:"blue",color:"white"}}> <p style={{color:"white"}}>footer</p></div>
    </div>
  )
}

export default Layout