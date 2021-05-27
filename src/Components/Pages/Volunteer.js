import React, { useEffect, useState } from 'react'
import MUIDataTable from "mui-datatables";
import DeleteIcon from '@material-ui/icons/Delete';
import EditAttributesOutlinedIcon from '@material-ui/icons/EditAttributesOutlined';
import EditAttributesIcon from '@material-ui/icons/EditAttributes';
import { api } from "../Api";


export const Volunteer = () => {


    const [getdata, setGetdata] = useState([])

    useEffect(async (index) => {
        const fetchapi = await fetch(api+"/volunteer");
        const response = await fetchapi.json();

        console.log(response)

        let temp = [];

        if (response.length) {

            response.map((item, index) => {

                temp.push({

                    id: item.id,

                    name: item.full_name,

                    Address: item.address,

                    contact: item.contact_no,

                    email: item.email,

                    city:item.city,

                    state:item.county,

                    pinCode:item.pin_code

                })
            })
        }
        setGetdata(temp);
    }, [1])


    const columns = [

        { name: "id", label: "S.No" },
        { name: "name", label: "user name" },
        { name: "Address", label: "User address" },
        { name: "contact", label: "Contact no" },
        { name: "email", label: "Email" },
        { name: "city", label: "City" },
        { name: "pinCode", label: "Pin Code" },
        { name: "state", label: "State" },
        {
            name: "action", label: "Action",
            options: {
              customBodyRender: () => {
      
                if ("item" ) {
                  return <EditAttributesIcon style={{color:"green",fontSize:"50px"}}/>
                } else {
                  return <EditAttributesOutlinedIcon style={{color:"red",fontSize:"50px"}}/>
                }
              }
            }
          },

    ];


    const options = {
        filterType: 'checkbox',
        selectableRowsHideCheckboxes : true,
    };


    return (
        <>
            <MUIDataTable
                title={"Volunteer"}
                data={getdata}
                columns={columns}
                options={options}
            />
        </>
    )
}



