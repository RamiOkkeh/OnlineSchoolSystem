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

function Class({ data }: any) {
  const classes = styles();
  return (
    <div className={classes.box}>
      <img
        src="https://d29fhpw069ctt2.cloudfront.net/icon/image/120343/preview.svg"
        alt=""
        style={{ width: "180px", height: "130px", marginTop: "1rem" }}
      />
      <h1 style={{ marginTop: "0px" }}>{data.name}</h1>
      <h2 style={{ marginTop: "-20px" }}>
        {data.students ? data.students.length : "0 students"}
      </h2>
    </div>
  );
}

export default Class;
