import React, { useState } from 'react'
import { Toggle } from './Toggle'

export const Hidd = () => {

    const [dispaly, setDisplay] = useState(true);
    const dis = () => {
        setDisplay(!dispaly);
    }


    const [name, setName] = useState("Clear all");

    const changeName = () => {
        if (name == "Clear all") {
            setName("Veiw All");

        } else {
            setName("Clear all");
        }
    }
        return (
            <>

               {dispaly?<Toggle />:null}
                <button onClick={() => { dis(), changeName() }}>{name}</button>
            </>
        )
    }
