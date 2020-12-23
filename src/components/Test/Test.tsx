import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { State } from "../../reducers/rootReducer";
import "./test.css";
import ScoreArea from "./scoreArea";
import QuizArea from "./QuizArea";
import {
  createStyles,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Theme,
} from "@material-ui/core";
// import local_IP from "../../local_IP";
const local_IP = require("../../local_IP") || "";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

function Test({ user, userDetails }: any) {
  const classes = useStyles();

  const [current, setCurrent] = useState(0);
  const [dataSet, setDataSet] = useState<any[]>([]);
  const [subjects, setSubjects] = useState<any[]>([]);
  const [subject, setSubject] = useState<any>({});
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  useEffect(() => {
    console.log(user, ">>>", userDetails);
    let options: any = {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ schoolID: user.schoolID }),
    };
    let path2 =
      process.env.NODE_ENV === "production"
        ? "/subject/getSchoolSubjects"
        : `${local_IP}/subject/getSchoolSubjects`;
    fetch(path2, options)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setSubjects(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log(current, dataSet.length);
    if (current === dataSet.length) {
      console.log("data", dataSet, correct);
      console.log({
        subjectID: 1,
        studentID: userDetails.id,
        firstGrade: (100 / dataSet.length) * correct,
      });
      console.log("grade", (100 / dataSet.length) * correct);
      let options: any = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          subjectID: subject.id,
          studentID: userDetails.id,
          firstGrade: (100 / dataSet.length) * correct,
        }),
      };
      let path =
        process.env.NODE_ENV === "production"
          ? `/exam/assignFirstGrade`
          : `${local_IP}/exam/assignFirstGrade`;
      fetch(path, options)
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const getExam = (sub) => {
    console.log(">>>>>>>>>>>subject", sub);
    let options: any = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subjectID: sub.id,
        studentID: userDetails.id,
      }),
    };
    let path =
      process.env.NODE_ENV === "production"
        ? `/exam/details`
        : `${local_IP}/exam/details`;
    fetch(path, options)
      .then((data) => data.json())
      .then((data) => {
        if (data[0]) {
          console.log(data[0].firstExam, subject);
          setDataSet(data[0].firstExam);
        } else {
          setDataSet([]);
        }
      });
  };

  const handleClick = async (choice: any) => {
    console.log("object");
    console.log("correct", correct, dataSet[current].correct, choice);
    if (choice === dataSet[current].correct) {
      setCorrect(correct + 1);
      console.log("correct", correct, dataSet[current].correct, choice);
    } else {
      setIncorrect(incorrect + 1);
    }
    setCurrent(current + 1);
  };

  return (
    <div style={{ marginLeft: "10rem", marginTop: "10rem" }}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Select subject
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={subject}
          onChange={(e: any) => {
            setSubject(e.target.value);
            getExam(e.target.value);
          }}
          label="Select subject"
        >
          {subjects &&
            subjects.map((sub: any) => (
              <MenuItem value={sub}>{sub.name}</MenuItem>
            ))}
        </Select>
      </FormControl>
      {dataSet.length ? (
        <div>
          {/* <ScoreArea correct={correct} incorrect={incorrect} /> */}
          {current === dataSet.length ? (
            <h4>
              thank you your grade is{" "}
              {((100 / dataSet.length) * correct).toFixed(2)}/100
            </h4>
          ) : (
            <QuizArea handleClick={handleClick} dataSet={dataSet[current]} />
          )}
        </div>
      ) : (
        <div style={{ marginTop: "10rem" }}>
          {" "}
          <h2>no exams yet</h2>{" "}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state: State) => {
  return {
    userDetails: state.userDetails,
    user: state.user,
  };
};

export default connect(mapStateToProps)(Test);
