import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export const UserList = () => {


    const Naivigator = useNavigate();
    const [loding, setLoding] = useState(false);

    const [userData, setUserData] = useState([]);
    useEffect(() => {
        getData();


    }, []);
    const url = "http://localhost:3000/posts";
    async function getData() {
        setLoding(true);

        const response = await fetch(url);
        const data = await response.json();
        setLoding(false);

        setUserData(data);
    }
    const DeletData = async (id) => {
        let response = await fetch(url + "/" + id,
            {
                method: "delete",
            }
        );

        response = await response.json();
        getData();
    }




    const EditData = (id) => {
        Naivigator("/edit/"+id);


    }
    return (
        <>
            <h3 className='infoma'> Data is comeing</h3>
            <div className='infoma'>
                <ui >
                    <li>NUMBER</li>
                    <li>NAME</li>
                    <li>AGE</li>
                    <li>Action</li>

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
                                <li><button onClick={() => { DeletData(item.id) }}>Delete</button></li>
                                <li><button onClick={() => { EditData(item.id) }}>Edit</button></li>

                            </ui>
                        </div>
                    )) : <h2>Loding...</h2>
            }</>
    )
}
