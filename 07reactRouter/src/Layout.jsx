import React from 'react'
import Header from './components/header/header'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'
import Home from './components/home/Home'


const Layout = () => {
  return (
    <>
    <Header/> 
    <Outlet/>
    <Home/>
   
    <Footer/>
    </>
  )
}

export default Layout