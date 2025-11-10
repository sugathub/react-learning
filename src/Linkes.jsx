import React from 'react'
import {Link, Outlet} from "react-router-dom"

export const Linkes = () => {
  return (
    <>
    <div className='uis'>
        
        <ui>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/addUser">Add User</Link></li>
        </ui>
    </div>
    <Outlet />
    
    </>
  )
}
