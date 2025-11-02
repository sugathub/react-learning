import React from 'react'

import {Link} from "react-router"
export const Linksok = () => {
    return (
        <>
            <Link to="/about"><h1>about</h1></Link>
            <Link to="/login"><h1>login</h1></Link>
            <Link to="/"><h1>home</h1></Link>

        </>
    )
}
