import React from 'react'
import { Link } from 'react-router-dom';

export const Userlist = () => {

    const userData = [
    { id: 1, name: 'sugat' },
    { id: 2, name: 'namm' },
    { id: 3, name: 'abby' }, 
    { id: 4, name: 'v'},
    { id: 5, name: 'galen' },];
    return (
        <>

            {
                userData.map((item)=>(
                    
                    <div className="text-4xl font-semibold text-gray-800 tracking-tight text-center mt-6">
                        <h2><Link to={"/user/"+item.id}>{item.name}</Link></h2>
                    </div>

                 ) )

            }


        </>
    )
}
