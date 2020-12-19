import React, { useState, useEffect } from "react";
import StatsStudent from "../../components/stats/StatsStudent";
import { connect } from "react-redux";
import { State } from "../../reducers/rootReducer";
import local_IP from "../../local_IP";

function Stats({ testdata, user, test }: any) {
  const [subjects, setSubjects] = React.useState([]);
  const [exams, setExams] = React.useState([{}]);
  // console.log("exams", exams,user);

  useEffect(() => {
    console.log("asd");
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ studentID: user.userID }),
    };
    let path =
      process.env.NODE_ENV === "production"
        ? "/exam/stats"
        : "http://127.0.0.1:8000/exam/stats";
    fetch(path, options)
      .then((data) => data.json())
      .then((data) => {
        console.log("mydataa", data);
        setExams(data);
      });
  }, [user]);

  // const [subjects, setSubjects] = React.useState([])
  // const [exams, setExams] = React.useState([{}])
  // // console.log("exams", exams,user);

  useEffect(() => {
    console.log("asd");
    let options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ studentID: user.userID }),
    };
    let path =
      process.env.NODE_ENV === "production"
        ? "/exam/stats"
        : `${local_IP}/exam/stats`;
    fetch(path, options)
      .then((data) => data.json())
      .then((data) => {
        console.log("mydataa", data);
        setExams(data);
      });
  }, [user]);

  return (
    <div>
      <StatsStudent exams={exams} />
    </div>
  );
}

const mapStateToProps = (state: State) => {
  return {
    test: state.test,
    schoolID: state.schoolID,
    user: state.user,
  };
};
export default connect(mapStateToProps)(Stats);
