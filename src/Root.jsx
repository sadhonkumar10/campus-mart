import React, { useState } from 'react'
import { Outlet } from 'react-router'
import Nav from './Componants/Nav'
import Footer from './Footer.jsx/Footer'
import { Toaster } from 'react-hot-toast'
import Loader from './Loder'

export default function Root() {
  const[searchText, setSearchText]=useState("")
  const [cart, setCart] = useState([]);
  
  return (
    <div>
      <Nav cartCount={cart.length}/>  
      <Toaster/>
      
      
      <Outlet context={{ searchText ,setSearchText, cart, setCart  }} />
      <Footer/>
      
      
      
    </div>
  )
}
