import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./Class.css";

const styles = makeStyles({
  box: {
    width: "300px",
    height: "250px",
    margin: "10px",
    backgroundColor: "#99ff66",
    transition: "0.5s",
  },
  hover: {
    width: "300px",
    height: "251px",

    position: "relative",
    top: "-246px",
  },
});

function Class({ data, id }: any) {
  const classess = styles();

  const edit = (e: any) => {
    let id = e.target.dataset.data;
    // classes[id];
    console.log(id);
  };

  return (
    <div className={`${classess.box} hover`} onClick={edit}>
      <img
        src="https://d29fhpw069ctt2.cloudfront.net/icon/image/120343/preview.svg"
        alt="glope"
        style={{ width: "180px", height: "130px", marginTop: "1rem" }}
      />

      <h1 style={{ marginTop: "0px" }}>{data.name}</h1>
      <h2 style={{ marginTop: "-20px" }}>
        {data.students ? `${data.students.length} Students` : "0 Students"}
      </h2>
      <div className={classess.hover} data-data={id}></div>
    </div>
  );
}

export default Class;
