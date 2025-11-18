import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './layouts/Home.jsx'
import { Router, RouterProvider } from 'react-router'
import router from './Route.jsx'
import UserProvider from './UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <UserProvider>
    <RouterProvider  router={router}/>
   </UserProvider>
  </StrictMode>,
)
