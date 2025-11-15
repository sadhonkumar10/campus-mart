import { createBrowserRouter } from "react-router";
import Root from "./Root";
import { Children } from "react";
import Home from "./layouts/Home";
import About from "./Componants/pages/About";
import DepartmentBooks from "./Componants/pages/DepartmentBooks";
import Project from "./Componants/pages/Project";
import Contact from "./Componants/pages/Contact";


const router= createBrowserRouter([

    {
        path:'/',
        element: <Root/>,
        children:[
            {
                path:'/',
                element:<Home/> 
            },
             {
                path:'/about',
                element: <About/> 
            },
             {
                path:'/departmentBooks',
                loader: () => fetch("/Books.json"),
                element: <DepartmentBooks  /> 
            },
            {
                path:'/project',
                loader: () => fetch("/Project.json"),
                element:  <Project/>
            },
            {
                path:'/contact',
                element: <Contact/>
            }
        ]
    }
    
])
export default router