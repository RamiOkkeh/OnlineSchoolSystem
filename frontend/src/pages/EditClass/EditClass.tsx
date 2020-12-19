import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { State } from "../../reducers/rootReducer";
import EditStudent from "../../components/EditStudent/EditStudent";
import { Redirect } from "react-router-dom";
import "./EditCalss.css";
import local_IP from "../../local_IP";

function EditClass({ user, waiting }: any) {
  let plop: any = {};
  let [obj, addToObj] = useState(plop);
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
  if (!waiting.students) {
    return <Redirect to="dashboard" />;
  }
  return (
    <div className="center">
      <Grid container direction="column" justify="center" alignItems="center">
        {waiting.students
          .filter((elem: any) => elem.schoolID === user.schoolID)
          .map((elem: any, i: number) => (
            <EditStudent data={elem} addToObj={addToObj} key={i} />
          ))}
      </Grid>
      <button onClick={submit}>Submit</button>
    </div>
  );
}

const mapStateToProps = (state: State) => {
  return {
    user: state.user,
    waiting: state.waiting,
  };
};

export default connect(mapStateToProps)(EditClass);
