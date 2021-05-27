import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { Box, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    // root: {
    //     marginTop: 20,
    //     marginLeft: 20,
    // },
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

export const DriverForm = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
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
                    label="Contact No"
                    id="outlined-margin-none"
                    className={classes.textField}
                    helperText="Enter your Contact No here"
                    variant="outlined"
                    required
                />
                <TextField
                    label="Email"
                    id="outlined-margin-none"
                    className={classes.textField}
                    helperText="Enter your Email here" helperText="Enter your Email here"
                    variant="outlined"
                    
                />
            </Box>
            <Box style={{ marginTop: 20 }}>
                <TextField
                    label="Aadhar Number"
                    id="outlined-margin-none"
                    className={classes.textField}
                    helperText="Enter Aadhar here"
                    variant="outlined"
                    required
                />
                <TextField
                    label="Driving licence"
                    id="outlined-margin-none"
                    className={classes.textField}
                    helperText="Enter driving licence number"
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
