import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import { connect } from "react-redux";
import { State } from "../../reducers/rootReducer"
import { Button, MenuItem, TextField } from '@material-ui/core';
import local_IP from '../../local_IP';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(1),
    },
}))

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
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



function CustomizedSelects({ schoolID, user }: any) {
    const classes = useStyles();
    const [classrooms, setClassrooms] = useState([]);
    const [classroom, setClassroom] = useState('');
    const [price, setPrice] = useState('');
    const [semester, setSemester] = useState('');
    const [studentsClass, setStudentsClass] = useState([]);


    // const handleChange = (event: any) => {
    //     console.log('studentsclass', studentsClass,".....",event.target.value.students)
    //     setStudentsClass(event.target.value.students);
    // };

    const handlePrice = (event: any) => {
        console.log('price', price)
        setPrice(event.target.value);
    };
    const handlesemester = (event: any) => {
        console.log('semester', semester)
        setSemester(event.target.value);
    };

    useEffect(() => {
        let options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ schoolID: user.schoolID })
        };
        let path =
            process.env.NODE_ENV === "production"
                ? "/payment/"
                : `${local_IP}/classroom/getSchoolClasses`;
        fetch(path, options)
            .then((data) => data.json())
            .then((data) => {
                console.log("mydata", data);
                setClassrooms(data);
            });
    }, [user])
    console.log('classroom', classrooms);
    const handelSubmit = (e: any) => {
        e.preventDefault();
        let options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ schoolID: user.schoolID, students: studentsClass, amount: price, semester })
        };
        let path =
            process.env.NODE_ENV === "production"
                ? "/payment/"
                : `${local_IP}/payment/addPayment`;
        fetch(path, options)
            .then((data) => {
                data.json()
            })
            .then((data) => {
                console.log("mydata1", data);
                setPrice('')
                setSemester('')
                setClassroom('')
                alert('Payments sent')
            });
    }

    return (

        <div style={{ marginTop: '11rem', display: "flex", paddingLeft: "16rem" }}>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Classroom</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    label="Classroom"
                    value={classroom}
                    onChange={(e: any) => {
                        setStudentsClass(e.target.value.students)
                        console.log(studentsClass)
                        setClassroom(e.target.value)
                    }}  >
                    {
                        classrooms.map((el: any, key: any) => {
                            return <MenuItem value={el} key={key}>{el.name}</MenuItem>
                        })}
                </Select>
            </FormControl>
            <form className={classes.root}>
                <TextField id="outlined-basic" value={price} label="Amount" variant="outlined" onChange={handlePrice} />
                <TextField id="outlined-basic" value={semester} label="Semester" variant="outlined" onChange={handlesemester} />
            </form>
            <Button variant="outlined" onClick={handelSubmit} style={{ alignSelf: 'center' }} >add payments</Button>
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