import React from 'react'
import './NaveBar.css';
import { Link } from 'react-router-dom';
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
                        <li><Link to="/about">about</Link></li>
                        <li><Link to="/login">login</Link></li>  </ul>

                </div>


            </div>

        </>
    )
}
