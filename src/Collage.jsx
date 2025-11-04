import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./Collage.css"
export const Collage = () => {
    return (
        <>
           <div className='CStyle'>
           <ui>
            <li> <NavLink to="student">Student</NavLink></li>
           <li> <NavLink to="details">Details</NavLink></li>
           <li> <NavLink to="department">Department</NavLink></li>
           
           </ui>
           <Outlet />
           

           

          </div>


        </>
    )
}
