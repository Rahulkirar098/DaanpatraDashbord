import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { api } from "../Api";
import { TextField } from '@material-ui/core';
import axios from "axios";


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    edit: {
        cursor: "pointer",
        fontSize: "50px"
    }
});

export function Topslider() {

    const classes = useStyles();

    const [getdata, setGetdata] = useState([])

    const [images, setImages] = useState()

    // const [uploadimage, setUploadimage] = useState(null)



    useEffect(async () => {

        const fetchapi = await fetch(api + "/topslider")

        const response = await fetchapi.json();

        console.log(response)

        setGetdata(response);

    }, [images])




    const handelPut = async (id) => {

        const formData = new FormData();

        formData.append('images', images);

        axios({
            url: `https://api.daanpatra.in/topslider/${id}/`,
            method: 'PUT',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            data: formData
        }).then((response) => {
            console.log(response)
            if (response) {
                window.location.reload();
            } else {
                alert("something Went wrong")
            }
        })
    }


    const handelPost = async (e) => {

        const formData = new FormData();

        formData.append('images', images);

        axios({
            url: `https://api.daanpatra.in/topslider/`,
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            data: formData
        }).then((response) => {
            console.log(response)
            if (response) {
                window.location.reload();
            } else {
                alert("something Went wrong")
            }
        })


    }

    const handeldelete = (id) => {

        fetch(`${api}topslider/${id}`, { method: 'DELETE' }).then((response) => {
            console.log(response)
            if (response) {
                window.location.reload();
            } else {
                alert("something Went wrong")
            }
        })

    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Image</StyledTableCell>
                        <StyledTableCell>Change</StyledTableCell>
                        <StyledTableCell>Update</StyledTableCell>
                        <StyledTableCell>Delete</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                    <StyledTableRow>

                        <StyledTableCell align="right">

                            <TextField
                                id="standard-basic"
                                label="Image"
                                type="file"
                                onChange={(e) => setImages(e.target.files[0])} />

                        </StyledTableCell>

                        <StyledTableCell ></StyledTableCell>

                        <StyledTableCell >

                            <AddCircleIcon className={classes.edit} onClick={(e) => handelPost(e)} />

                        </StyledTableCell>

                    </StyledTableRow>
                </TableBody>
                <TableBody>
                    {getdata.map((row) => (
                        <StyledTableRow key={row}>

                            <StyledTableCell >

                                <img src={row.images} style={{ width: '300px' }} alt="image" type="file" />

                            </StyledTableCell>

                            <StyledTableCell >

                                <TextField
                                    id="standard-basic"
                                    label="Image"
                                    type="file"
                                    onChange={(e) => setImages(e.target.files[0])} />

                            </StyledTableCell>

                            <StyledTableCell >

                                <EditIcon className={classes.edit} onClick={() => handelPut(row.id)} />

                            </StyledTableCell>

                            <StyledTableCell >

                                <DeleteIcon className={classes.edit} onClick={() => handeldelete(row.id)} />

                            </StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>

            </Table>
        </TableContainer>
    );
}

