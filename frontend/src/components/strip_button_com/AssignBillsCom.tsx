import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { connect } from "react-redux";
import { State } from "../../reducers/rootReducer"
import { useRadioGroup } from '@material-ui/core';

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        marginTop: '6rem',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

function CustomizedSelects({ schoolID, user }: any) {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [classroom, setClassroom] = useState('');

    const handleChange = (event: any) => {
        setClassroom(event.target.value);
    };
    useEffect(() => {
        let options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ schoolID })
        };
        let path =
            process.env.NODE_ENV === "production"
                ? "/payment/"
                : "http://localhost:8000/payment/addPayment";
        fetch(path, options)
            .then((data) => data.json())
            .then((data) => {
                console.log("mydata", data);
                setClassroom(data);
            });
    }, [user])
    console.log('role', schoolID);
    return (
        <div>
            <FormControl className={classes.margin}>
                <InputLabel id="demo-customized-select-label">Age</InputLabel>
            </FormControl>
            <FormControl className={classes.margin}>
                <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>
                <NativeSelect
                    id="demo-customized-select-native"
                    value={classroom}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </NativeSelect>
            </FormControl>
            <FormControl className={classes.margin}>
                <InputLabel htmlFor="totalAmount">Age</InputLabel>
                <BootstrapInput id="demo-customized-textbox" />
            </FormControl>
            <FormControl className={classes.margin}>
                <InputLabel htmlFor="input semster">Age</InputLabel>
                <BootstrapInput id="demo-customized-textbox" />
            </FormControl>
            <button style={{ marginTop: "8.2rem", fontSize: "24px" }} >select</button>
        </div>
    );
}
const mapStateToProps = (state: State) => {
    return {
        schoolID: state.schoolID,
        user: state.user,
    };
};

export default connect(mapStateToProps)(CustomizedSelects);