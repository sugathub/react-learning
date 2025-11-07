import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./Collage.css"
export const Collage = () => {
    return (
        <><div>
           <div  className="text-4xl font-semibold text-gray-800 tracking-tight text-center mt-6">
           <ui>
            <li> <NavLink to="">Student</NavLink></li>
           <li> <NavLink to="details">Details</NavLink></li>
           <li> <NavLink to="department">Department</NavLink></li>
            <Outlet />
           </ui>
           
           

           

          </div>
         
</div>

        </>
    )
}
