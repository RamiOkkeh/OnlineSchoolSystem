import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { Select, MenuItem } from "@material-ui/core";
import { connect } from "react-redux";
import { State } from "../../reducers/rootReducer";

const EditStudent = function ({ data, addToObj, classes }: any) {
  const [Class, setClass] = useState({});
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <p>{data.studentName}</p>
      <Select
        value={Class}
        color="primary"
        variant="outlined"
        onChange={(e: any) => {
          setClass(e.target.value);
          addToObj((obj: any) => {
            obj[data.userID] = e.target.value.id;
            return obj;
          });
        }}
      >
        <MenuItem value="">----</MenuItem>
        {classes.map((elem: any) => (
          <MenuItem value={elem}>{elem.name}</MenuItem>
        ))}
      </Select>
    </Grid>
  );
};

const mapStateToProps = (state: State) => {
  return {
    classes: state.classes,
  };
};
export default connect(mapStateToProps)(EditStudent);
