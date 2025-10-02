import React from 'react'

export const Table = () => {

    const student =[
        {   id:1,
            name:"sugat",
            email:"sugatjamgade@gmail.com",

        },
        {
            id:2,
            name:"askjsa",
            email:"dlkjkdkdk",
        }
    ]



    return (
        <>

        <h2>New Table</h2>
        <table style={{border:"2px solid green"}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                </tr>

            </thead>
            <tbody>
               {
                student.map((item)=>(                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                    </tr>
                ))
               }
                

            </tbody>
        </table>









          



        </>
    )
}
