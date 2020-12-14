import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import { connect } from "react-redux";
import { State } from "../../reducers/rootReducer"
import { MenuItem } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
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
    const [classroom, setClassroom] = useState();
    const [price, setPrice] = useState();
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
                : "http://localhost:8000/classroom/getSchoolClasses";
        fetch(path, options)
            .then((data) => data.json())
            .then((data) => {
                // console.log("mydata", data);
                setClassrooms(data);
            });
    }, [user])
    // console.log('classroom', classroom);
    const handelSubmit = (e: any) => {
        e.preventDefault();
        let options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ schoolID: user.schoolID, students:studentsClass, amount:price, semester })
        };
        let path =
            process.env.NODE_ENV === "production"
                ? "/payment/"   
                : "http://localhost:8000/payment/addPayment";
        fetch(path, options)
            .then((data) => data.json()
            )
            .then((data) => {
                console.log("mydata1", data);
            });
        console.log(path)
    }
    // console.log('classroom', classroom);

    return (

        <div style={{ marginTop: '11rem', display: "flex", paddingLeft: "16rem" }}>
            <FormControl className={classes.formControl} >
                <InputLabel id="demo-simple-select-label">classroom</InputLabel>
                <Select

                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={classroom}
                    onChange={(e:any)=>{
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
            <FormControl  >
                <InputLabel htmlFor="totalAmount" >input price</InputLabel>
                <BootstrapInput id="demo-customized-textbox" onChange={handlePrice} placeholder="price" />
            </FormControl>
            <FormControl >
                <InputLabel htmlFor="input semester" >input semester</InputLabel>
                <BootstrapInput id="demo-customized-textbox" onChange={handlesemester} placeholder="semster " />
            </FormControl>

            <div style={{ paddingTop: "1.5rem", paddingLeft: "1rem" }} >
                <button onClick={handelSubmit} style={{ backgroundColor: "gray", fontSize: '24px' }}>select</button>
            </div>
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