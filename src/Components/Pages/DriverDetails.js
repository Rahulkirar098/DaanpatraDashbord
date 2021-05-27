import React, { useEffect, useState } from 'react'
import MUIDataTable from "mui-datatables";
import moment from "moment";
import { api } from "../Api";


export const DriverDetails = () => {

    const [getdata, setGetdata] = useState([])

    const token = localStorage.getItem("token")

    useEffect(async (index) => {

        const fetchapi = await fetch(api+ "/user-register", {
            headers: {
              'Authorization': token,
            }
          })

        const response = await fetchapi.json();

        
        let temp = [];

        if (response.length) {

            response.map((item, index) => {

                temp.push({

                    id: index + 1,

                    Name: item.first_name,

                    last: item.last_name,

                    contact: item.contact,

                    date_of_enroll: item.date_joined,

                    password:item.password,

                    address:item.address,

                    email:item.email
                })

            })
        }
        setGetdata(temp);
    }, [1])

    const columns = [

        { name: "id", label: "S.no" },
        { name: "Name", label: "Frist name" },
        { name: "last", label: "Last name" },
        { name: "email", label: "Email" },
        { name: "contact", label: "Contact no" },
        {
            name: "date_of_enroll", label: "Date",
            options: {
              customBodyRender: (date_of_enroll) =>
                moment(date_of_enroll).format('DD/MM/YYYY')
            }
          },
        { name: "aadhar", label: "Aadhar" },
        { name: "driving", label: "Driving Licence" },
        { name: "address", label: "Address" },
        { name: "zip_code", label: "Zip Code" },
        { name: "city", label: "City" },
        { name: "state", label: "State" },
        { name: "countery", label: "Countery" },

    ];

    const options = {
        filterType: 'checkbox',
        selectableRowsHideCheckboxes: true,

    };

    return (
        <>
            <MUIDataTable
                title={"Driver Details"}
                data={getdata}
                columns={columns}
                options={options}
            />
        </>
    )
}

