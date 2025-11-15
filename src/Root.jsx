import React, { useState } from 'react'
import { Outlet } from 'react-router'
import Nav from './Componants/Nav'

export default function Root() {
  const[searchText, setSearchText]=useState("")
  return (
    <div>
      <Nav searchText={searchText} setSearchText={setSearchText}/>  
      
      <Outlet context={{ searchText }} />
      
      
    </div>
  )
}
