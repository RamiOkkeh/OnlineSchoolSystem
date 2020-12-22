import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { State } from "../../reducers/rootReducer";
import "./test.css";
import ScoreArea from "./scoreArea";
import QuizArea from "./QuizArea";
import local_IP from "../../local_IP";

function Test({ user, userDetails }: any) {
  // type dataSetType = [
  //   {
  //     question: any;
  //     answers: string[];
  //     correct: number;
  //     // incorrect: string[];
  //   }
  // ];

  const [current, setCurrent] = useState(0);
  const [dataSet, setDataSet] = useState<any[]>([]);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  useEffect(() => {
    console.log(user, ">>>", userDetails);
    let options: any = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subjectID: 1,
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
          console.log(data[0].firstExam);
          setDataSet(data[0].firstExam);
        }
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
          subjectID: 1,
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

    // setCurrent(0)
    // setIncorrect(0)
    // setCorrect(0)
    // to do post request add test result to db
    // } else {
    //   // setCurrent(current + 1)
    //   // console.log('current',current)
    // }
  };

  return (
    <div style={{ marginLeft: "10rem", marginTop: "10rem" }}>
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
