import React, { useEffect, useState } from 'react'
import MUIDataTable from "mui-datatables";
import EditAttributesOutlinedIcon from '@material-ui/icons/EditAttributesOutlined';
import EditAttributesIcon from '@material-ui/icons/EditAttributes';
import { api } from "../Api";
import axios from "axios";




export const DonationDetails = () => {

  // const api = `https://api.daanpatra.in/donation/`;

  const [getdata, setGetdata] = useState([])

  const [Accepted, setAccepted] = useState(false)


  const token = localStorage.getItem("token")



  useEffect(async (index) => {
    const fetchapi = await fetch(api+'/donation', {
      headers: {
        'Authorization': token,
      }
    })
    const response = await fetchapi.json();

    let temp = [];

    if (response.length) {

      response.map((item, index) => {
        temp.push({

          id: item.id,

          name: item.user.first_name + " " + item.user.last_name,

          contact: item.user.contact ? "+91 " + item.user.contact : "",

          Address: item.pickup_address,

          image: item.Product_Images,

          donation_date: item.pickup_date,

          quantity: item.quantity,

          details: item.product_description,

          status: item.donation_status,

          Category: item.product_category,

          action: item.donation_status
        })

      })
    }
    setGetdata(temp);


  }, [1])


  const handlestatus = (id) => {

    fetch(api+'status/'+id.rowData.[0]+"/", {
      method: 'PATCH',
      headers: {
        'Authorization': token,
      }
    }).then(response =>
      {
      if (response) {
        window.location.reload();
    } else {
        alert("something Went wrong")
    }
      console.log(response)})


    // console.log(id.rowData.[0])
    
  }

  const columns = [
    { name: "id", label: "S.No" },
    { name: "name", label: "Donator Name" },
    { name: "contact", label: "Contact No" },
    { name: "Address", label: "Pickup Address" },
    {
      name: "image", label: "Item Image",
      options: {
        customBodyRender: (value) => {
          if (value.length > 1) {
            return <img style={{ width: 50, height: 50 }} src={`https://api.daanpatra.in${value[1].images}`} alt={"Product Img"} />
          } else {
            return null
          }
        }
      }
    },
    { name: "donation_date", label: "Donation Date" },
    { name: "quantity", label: "item quantity" },
    { name: "Category", label: "Category" },
    { name: "details", label: "Description" },
    { name: "zip_code", label: "Zip Code" },
    { name: "city", label: "City" },
    { name: "state", label: "State" },
    { name: "countery", label: "Countery" },
    {
      name: "status", label: "Status",
      options: {
        customBodyRender: (items) => {

          if (items) {
            return "Accepted"
          } else {
            return "Pending"
          }
        }
      }
    },
    {
      name: "action", label: "Action",
      options: {
        customBodyRender: (items, id) => {

          if (items) {
            return <EditAttributesIcon style={{ color: "green", fontSize: "50px" }} onClick={() => {alert("You Allready Accepted")}} />
          } else {
            return <EditAttributesOutlinedIcon style={{ color: "red", fontSize: "50px" }} onClick={() => handlestatus(id)} />
          }
        }
      }
    },
  ];

  const options = {
    filterType: 'checkbox',
    selectableRowsHideCheckboxes: true,
  };


  return (
    <>
      <MUIDataTable
        title={"Donation Details"}
        data={getdata}
        columns={columns}
        options={options}
      />
    </>
  )
}





