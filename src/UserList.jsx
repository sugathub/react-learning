import React from 'react'
import { useEffect, useState } from 'react'


export const UserList = () => {

    const [loding, setLoding] = useState(false);

    const [userData, setUserData] = useState([]);
    useEffect(() => {
        getData();

    }, []);

    async function getData() {
        setLoding(true);

        const url = "http://localhost:3000/posts";
        const response = await fetch(url);
        const data = await response.json();
        setLoding(false);

        setUserData(data);
    }
    return (
        <>
            <h3 className='infoma'> Data is comeing</h3>
            <div className='infoma'>
            <ui >
                <li>NUMBER</li>
                <li>NAME</li>
                <li>AGE</li>

            </ui>
            </div>
            {
                !loding ?
                    userData.map((item) => (
                        <div className='infoma'>
                           
                            <ui id={item.id}>
                                <li>{item.number}. </li>
                                <li> <b style={{ color: 'blue' }}>{item.name}</b></li>
                                <li> <b style={{ color: 'red' }}>{item.age}</b> </li>
                            </ui>
                        </div>
                    )) : <h2>Loding...</h2>
            }</>
    )
}
