import React, { useEffect, useState } from "react";
import { Card, FormControl, Grid, InputLabel, makeStyles } from "@material-ui/core";
import { Select, MenuItem } from "@material-ui/core";
import { connect } from "react-redux";
import { State } from "../../reducers/rootReducer";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: 55,
    backgroundColor: '#00000020',
    margin: '5px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  formControl: {
    minWidth: 120,
  },
})
const EditStudent = function ({ data, addToObj, classes }: any) {
  const styleClasses = useStyles();


  const [Class, setClass] = useState({});
  console.log(">>>>>>>", classes);

  useEffect(() => { console.log('object', classes); }, [classes])

  return (
    <Card className={styleClasses.root}>
      <h4>{data.studentName}</h4>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Select class</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={Class}
          color="primary"
          style={{ width: '120px' }}
          onChange={(e: any) => {
            setClass(e.target.value);
            addToObj((obj: any) => {
              obj[data.userID] = e.target.value.id;
              return obj;
            });
          }}
        >
          {classes && classes.map((elem: any) => (
            <MenuItem value={elem}>{elem.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Card>
  );
};

const mapStateToProps = (state: State) => {
  return {
    classes: state.classes,
  };
};

export default connect(mapStateToProps)(EditStudent);
