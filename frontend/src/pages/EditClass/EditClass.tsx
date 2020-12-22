import React, { useEffect, useState } from "react";
import { Button, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { State } from "../../reducers/rootReducer";
import EditStudent from "../../components/EditStudent/EditStudent";
import { Redirect } from "react-router-dom";
import "./EditCalss.css";
import local_IP from "../../local_IP";

function EditClass({ user }: any) {
  let plop: any = {};
  let [obj, addToObj] = useState(plop);
  let [waiting, setWaiting] = useState([]);

  const submit = () => {
    console.log(obj);
    let keys = Object.keys(obj);
    keys.forEach((elem: any) => {
      let options = {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userID: elem, classroomID: obj[elem] }),
      };
      let path =
        process.env.NODE_ENV === "production"
          ? "/student/assignClass"
          : `${local_IP}/student/assignClass`;
      fetch(path, options)
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
        });
    });
  };

  useEffect(() => {
    let options = {
      method: "get",
      headers: { "Content-Type": "application/json" },
    };
    let path =
      process.env.NODE_ENV === "production"
        ? "/classroom/"
        : `${local_IP}/classroom/`;
    fetch(path, options)
      .then((data) => data.json())
      .then((data) => {
        console.log(data[0]);
        setWaiting(data[0].students);
      });
  }, [])

  return (
    <div className="center">
      <h3>Waiting room</h3>
      <Grid container direction="column" justify="center" alignItems="center">
        {waiting.map((elem: any, i: number) => {
          if (elem.schoolID === user.schoolID) return <EditStudent data={elem} addToObj={addToObj} key={i} />
          return <div></div>
        })}
      </Grid>
      <Button variant='outlined' onClick={submit}>Submit</Button>
    </div>
  );
}

const mapStateToProps = (state: State) => {
  return {
    user: state.user,
    // waiting: state.waiting,
  };
};

export default connect(mapStateToProps)(EditClass);
