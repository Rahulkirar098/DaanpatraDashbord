import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { Box, Container } from '@material-ui/core';
import { api } from "../Api";


const useStyles = makeStyles((theme) => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "25ch",
    },
    button: {
        margin: theme.spacing(1),
        backgroundColor: "#F7CD2E",
    },
    heading: {
        width: '30%',
        // height: '1%',
        backgroundColor: '#F7CD2E',
        padding: 15,
        textAlign: 'center',
        borderRadius: 30,
    }
}));

export const SubAdminForm = () => {
    const classes = useStyles();

    return (
        <Container>
            <Box style={{ marginTop: 20 }}>
                <TextField
                    label="First Name"
                    id="outlined-margin-none"
                    className={classes.textField}
                    helperText="Enter First Name here"
                    variant="outlined"
                    required
                />
                <TextField
                    label="Last Name"
                    id="outlined-margin-none"
                    className={classes.textField}
                    helperText="Enter Last Name here"
                    variant="outlined"
                    required
                />
            </Box>
            <Box style={{ marginTop: 20 }}>
                <TextField
                    label="Email"
                    id="outlined-margin-none"
                    className={classes.textField}
                    helperText="Enter your Email here"
                    variant="outlined"
                    required
                />
                <TextField
                    label="Contact No"
                    id="outlined-margin-none"
                    className={classes.textField}
                    helperText="Enter your Contact No here"
                    variant="outlined"
                    required
                />
            </Box>
            <Box style={{ marginTop: 20 }}>
                <TextField
                    label="Password"
                    id="outlined-margin-none"
                    className={classes.textField}
                    helperText="Enter Password"
                    variant="outlined"
                    required
                />
                <TextField
                    label="Confirm Password"
                    id="outlined-margin-none"
                    className={classes.textField}
                    helperText="Enter Confirm Password"
                    variant="outlined"
                    required
                />
            </Box>
            <Box style={{ marginTop: 20 }}>
                <TextField
                    label="Address"
                    id="outlined-margin-none"
                    className={classes.textField}
                    helperText="Enter Address here"
                    variant="outlined"
                    required
                />
                <TextField
                    label="Zip Code"
                    id="outlined-margin-none"
                    className={classes.textField}
                    helperText="Enter Zip Code of your area"
                    variant="outlined"
                    required
                />
            </Box>
            <Box style={{ marginTop: 20 }}>
                <TextField
                    label="City"
                    id="outlined-margin-none"
                    className={classes.textField}
                    helperText="Enter City Name here"
                    variant="outlined"
                    required
                />
                <TextField
                    label="State"
                    id="outlined-margin-none"
                    className={classes.textField}
                    helperText="State where you live"
                    variant="outlined"
                    required
                />
                <TextField
                    label="Country"
                    id="outlined-margin-none"
                    className={classes.textField}
                    helperText="Enter your Country Name"
                    variant="outlined"
                    required
                />
            </Box>
            <Box style={{ marginTop: 20 }}>
                <Button
                    variant="contained"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                >
                    Save
        </Button>
            </Box>
        </Container>

    )
}
