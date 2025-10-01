import React, { useState } from 'react'

export const Controller = () => {

    const [name, setName] = useState();
    const [Password, setPassword] = useState();
    const [email, setemail] = useState();
    return (
        <>

            <form method='get' action="submit">
                <input type="text" placeholder='Entar Name' value={name} onChange={(event) => { setName(event.target.value) }} />
                <br /><br />
                <input type="password" placeholder='Entar password' value={Password} onChange={(event) => { setPassword(event.target.value) }} />
                <br /><br />
                <input type="email" placeholder='Entar Email' value={email} onChange={(event) => { setemail(event.target.value) }} />
                <br /><br />

                <button type='submit'> submit</button>
                <button onClick={() => { setName(""); setemail(""); setPassword(""); }}>clera</button>
                <h1>{name}</h1><br />
                <h1>{Password}</h1><br />
                <h1>{email}</h1>

            </form>

        </>
    )
}
