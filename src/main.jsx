import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './layouts/Home.jsx'
import { Router, RouterProvider } from 'react-router'
import router from './Route.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider  router={router}/>
  </StrictMode>,
)
