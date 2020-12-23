import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { State } from "../../reducers/rootReducer";
import Class from "../../components/Class/Class";
import { makeStyles } from "@material-ui/core/styles";
import { createClass } from "../../actions/actions";
import CreateClassDialog from "../../components/CreateClass/CreateClass";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
const local_IP = require("../../local_IP") || "";

const styles = makeStyles({
  flex: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    height: "70%",
    // width: "1000px",
    marginTop: "100px",
    marginLeft: "200px",
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: "12rem",
  },
  form: {
    backgroundColor: "white",
    padding: "10px",
  },
});

function Classes({ classes, user, createClass, role }: any) {
  const classess = styles();

  const [name, setName] = useState("");
  const [classroom, setClassroom] = useState([]);

  const getClassrooms = () => {
    let options = {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ schoolID: user.schoolID }),
    };
    let path =
      process.env.NODE_ENV === "production"
        ? "/classroom/getSchoolClasses"
        : `${local_IP}/classroom/getSchoolClasses`;
    fetch(path, options)
      .then((data) => data.json())
      .then((data) => {
        createClass(data);
        setClassroom(data);
      });
  };

  useEffect(() => {
    getClassrooms();
  }, [user]);

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, schoolID: user.schoolID || 1 }),
    };
    console.log(classes);
    let path =
      process.env.NODE_ENV === "production"
        ? "/classroom/"
        : `${local_IP}/classroom/`;
    fetch(path, options)
      .then((data) => data.json())
      .then((data) => {
        createClass(data);
        setName("");
        getClassrooms();
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <div className={classess.flex}>
        {classroom.map((elem: any, i: number) => {
          return <Class data={elem} key={i} id={elem.id} />;
        })}
      </div>
      {role === "Principal" ? (
        <div className={classess.buttons}>
          <CreateClassDialog submit={submit} setName={setName} name={name} />
          <Link
            to="/editclass"
            style={{ textDecoration: "none", paddingTop: "1rem" }}
          >
            <Button variant="outlined">Waiting room</Button>
          </Link>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    createClass: (newState: State) => {
      dispatch(createClass(newState));
    },
  };
};

const mapStateToProps = (state: State) => {
  return {
    classes: state.classes,
    user: state.user,
    role: state.role,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Classes);
