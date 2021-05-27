import React, { useEffect, useState } from 'react'
import MUIDataTable from "mui-datatables";
import moment from "moment";
import { api } from "../Api";


export const Userprofile = () => {

  const [getdata, setGetdata] = useState([])


  useEffect(async (index) => {

    const fetchapi = await fetch(api+"/user-register");

    const response = await fetchapi.json();

    // console.log(response)

    let temp = [];

    if (response.length) {

      response.map((item, index) => {

        temp.push({

          id: index + 1,

          profile_pic: item.image,

          Name: item.first_name,

          last: item.last_name,

          contact: item.contact,

          date_of_enroll: item.date_joined,

          role: item.role,

        })

      })
    }
    setGetdata(temp);
  }, [1])

  const columns = [

    { name: "id", label: "S.no" },
    { name: "Name", label: "Frist name" },
    { name: "last", label: "Last name" },
    { name: "contact", label: "Contact no" },
    {
      name: "date_of_enroll", label: "Date",
      options: {
        customBodyRender: (date_of_enroll) =>
          moment(date_of_enroll).format('DD/MM/YYYY')
      }
    },
    {
      name: "role", label: "Role",
      // options: {
      //   customBodyRender: (role) => {
      //     if (role == "user") {
      //       return "User"
      //     }
      //   }
      // }
    },



  ];


  const options = {
    filterType: 'checkbox',
    selectableRowsHideCheckboxes: true,
    customBodyRender : (role) =>{
 console.log(role)
    }
  };


  return (
    <>
      <MUIDataTable
        title={"User Profile"}
        data={getdata}
        columns={columns}
        options={options}
      />
    </>
  )
}





