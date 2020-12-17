import React, { useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { State } from "../../reducers/rootReducer";
import Class from "../../components/Class/Class";
import { makeStyles } from "@material-ui/core/styles";
import { createClass } from "../../actions/actions";
import CreateClassDialog from "../../components/CreateClass/CreateClass";
import { Link } from "react-router-dom";

const styles = makeStyles({
  flex: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    height: "100vh",
    // width: "1000px",
    marginTop: "100px",
    marginLeft: "200px",
  },
  button: {
    width: "200px",
    height: "200px",
    border: "5px solid black",
    borderRadius: "200px",
    outline: "none",
    backgroundImage:
      'url("https://media.istockphoto.com/photos/light-green-defocused-blurred-motion-abstract-background-picture-id1138288758?k=6&m=1138288758&s=612x612&w=0&h=rwNnAXEgmHzxpeb7SY0A2KVMOQhkBaoml1T6HEaW7Fs=")',
    backgroundPosition: "center",
    backgroundSize: "100% 100%",
    color: "white",
  },
  form: {
    backgroundColor: "white",
    padding: "10px",
  },
});

function Classes({ classes, user, createClass, role }: any) {
  const classess = styles();

  const [name, setName] = useState("");

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
        : "http://localhost:8000/classroom/";
    fetch(path, options)
      .then((data) => data.json())
      .then((data) => {
        createClass(data);
        setName("");
      });
  };
  return (
    <div className={classess.flex}>
      {classes.map((elem: any, i: number) => {
        return <Class data={elem} key={i} id={i} />;
      })}
      {role === "Principal" ? (
        <CreateClassDialog
          submit={submit}
          buttonStyle={classess.button}
          setName={setName}
          name={name}
        />
      ) : (
        ""
      )}
      {role === "Principal" ? (
        <Link to="/editclass" style={{ textDecoration: "none" }}>
          Edit
        </Link>
      ) : (
        ""
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
