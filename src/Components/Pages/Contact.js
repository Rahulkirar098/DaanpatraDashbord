import React, { useEffect, useState } from 'react'
import MUIDataTable from "mui-datatables";
import { api } from "../Api";


export const Contact = () => {

    const [getdata, setGetdata] = useState([])

    useEffect(async () => {
        const fetchapi = await fetch(api+"/contact");
        const response = await fetchapi.json();

        let temp = [];

        if (response.length) {

            response.map((item) => {

                temp.push({

                    SL: item.id,

                    Fristname: item.first_name,

                    Lastname: item.last_name,

                    Email: item.email,

                    Message: item.message,

                    Contact: item.contact_no,

                    Delete : <h1 onClick={()=>{alert("hye"+item.id)}}>Delete</h1>
                })
            })
        }
        setGetdata(temp);
    }, [1])


    const columns = [
        { name: "SL",    },
        { name: "Fristname", lable: "Frisaatname" },
        { name: "Lastname", lable: "Lastname" },
        { name: "Contact", lable: "Contact" },
        { name: "Email", lable: "Email" },
        { name: "Message", lable: "Message" },
    ];


    const options = {
        filterType: 'checkbox',
        selectableRowsHideCheckboxes : true,
    };


    return (
        <>
            <MUIDataTable
                title={"Contact"}
                data={getdata}
                columns={columns}
                options={options}
            />
        </>
    )
}





