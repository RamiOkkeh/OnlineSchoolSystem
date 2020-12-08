import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
  box: {
    width: "300px",
    height: "250px",
    margin: "10px",
    backgroundColor: "#99ff66",
  },
});

function Class({ color }: any) {
  const classes = styles();
  return <div className={classes.box}></div>;
}

export default Class;
