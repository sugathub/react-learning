import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';

export const UserEdit = () => {


    const Navigate =useNavigate();

    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const { id } = useParams();

    useEffect(() => {
        getUserData();
    }, []);


    const URL = "http://localhost:3000/posts/" + id;
    const getUserData = async () => {

        let response = await fetch(URL);

        response = await response.json();
        setNumber(response.number);
        setName(response.name);
        setAge(response.age);

    }

    const updataData = async () => {
        let response = await fetch(URL, {
            method: 'Put',
            body: JSON.stringify({ number, name, age })
        });

        response = await response.json()

        if (response) {
            alert("User data update");
            Navigate("/")
        }


    }

    return (

        <>

            <div className='tInput'>

                <input type="number" value={number} onChange={(event) => { setNumber(event.target.value) }} placeholder='Enter number' />

                <input type="text" value={name} onChange={(event) => { setName(event.target.value) }} placeholder='Enter Name' />

                <input type="number" value={age} onChange={(event) => { setAge(event.target.value) }} placeholder='Enter Age' />

                <button onClick={() => {
                    if (name && age && number) {
                        updataData();
                    }
                }}>Update</button>
            </div>





        </>
    )
}
