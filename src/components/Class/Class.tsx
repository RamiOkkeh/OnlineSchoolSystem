import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./Class.css";
import { Link, Redirect } from "react-router-dom";
import { State } from "../../reducers/rootReducer";
import { Dispatch } from "redux";
import { setClassroomID } from "../../actions/actions";
import { connect } from "react-redux";

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

function Class({ data, id, setClassroomID }: any) {
  const classess = styles();

  const edit = (e: any) => {
    let id = e.target.dataset.data;
    setClassroomID(id)
    console.log('>>>', id);
  };

  return (
    <div className={`${classess.box} hover`} onClick={edit}>
      <Link to='/classroom' style={{ textDecoration: 'none', color: 'black' }}>
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
      </Link>
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setClassroomID: (z: any) => dispatch(setClassroomID(z)),
  };
};

const mapStateToProps = (state: State) => {
  return {
    user: state.user,
    classroomID: state.classroomID,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Class);
