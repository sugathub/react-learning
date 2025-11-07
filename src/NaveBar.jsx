import React from 'react'
import './NaveBar.css';
import { Link, Outlet } from 'react-router-dom';
export const NaveBar = () => {

    return (
        <>
            <div className='nav'>
                <div className='logo'>
                    <h3>logo</h3>

                </div>
                <div className='conned'>
                    <ul>
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/user/about">about</Link></li>
                        <li><Link to="/user/login">login</Link></li>  
                        <li><Link to="collage">Collage</Link></li>
                        <li><Link to ="/user">User</Link></li>
                         <li><Link to ="/user/list">List</Link></li> </ul>

                   <Outlet />    

                </div>
 

            </div>

        </>
    )
}
