import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { State } from "../../reducers/rootReducer";
import "./test.css";
import ScoreArea from "./scoreArea";
import QuizArea from "./QuizArea";

function Test({ user, userDetails }: any) {
  type dataSetType = [
    {
      question: any;
      answers: string[];
      correct: number;
      // incorrect: string[];
    }
  ];

  const [current, setCurrent] = useState(0);
  const [dataSet, setDataSet] = useState<dataSetType>([
    {
      question: "",
      answers: [],
      correct: 0,
    },
  ]);
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
        : `http://localhost:8000/exam/details`;
    fetch(path, options)
      .then((data) => data.json())
      .then((data) => {
        console.log(data[0].firstExam);
        setDataSet(data[0].firstExam);
      });
  }, [user]);

  // to do get request fetch exam data
  var dataSetExample = [
    {
      question: "What is 8 x 1?",
      answers: ["1", "8", "16", "9"],
      correct: 1,
    },
    {
      question: "Who is Steve Jobs?",
      answers: [
        "CEO of Microsoft",
        "Barber in NY",
        "Movie Star",
        "CEO of Apple",
      ],
      correct: 3,
    },
    {
      question: "Metallica is a ____ band",
      answers: ["Blues", "Hard-Rock", "Jazz", "Metal"],
      correct: 3,
    },
    {
      question: "IS is a ____",
      answers: ["Word", "Band", "Terror Group", "Brand"],
      correct: 2,
    },
    {
      question: "Who was Einstein",
      answers: [
        "A Scientist",
        "A Dentist",
        "A Serial Killer",
        "None of the above",
      ],
      correct: 0,
    },
    {
      question: "JavaScript can be used in ____ development",
      answers: ["Back-End", "Front-End", "ReactJS", "All of the Above"],
      correct: 3,
    },
    {
      question: "Hitler was a",
      answers: [
        "Mass Murderer",
        "Dictator",
        "Jew",
        "None of the above",
        "All of the above",
      ],
      correct: 4,
    },
    {
      question: "Korn is a",
      answers: ["Nu-Metal band", "Religion", "Singer"],
      correct: 0,
    },
    {
      question: "Windows computers are",
      answers: ["Horrible", "Great", "Cheap", "Invented by Bill Gates"],
      correct: 3,
    },
    {
      question: "The BigBan stands in",
      answers: ["Egypt", "London", "Amsterdam", "NewYork"],
      correct: 1,
    },
  ];

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
          : `http://localhost:8000/exam/assignFirstGrade`;
      fetch(path, options)
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
        });
    }
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
    <div style={{ marginLeft: "14rem", marginTop: "3rem" }}>
      <ScoreArea correct={correct} incorrect={incorrect} />
      {current === dataSet.length ? (
        <h4>thank you your grade is {(100 / dataSet.length) * correct}/100</h4>
      ) : (
        <QuizArea handleClick={handleClick} dataSet={dataSet[current]} />
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
