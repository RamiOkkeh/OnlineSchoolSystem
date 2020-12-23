import {
  Button,
  FormControl,
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { State } from "../../reducers/rootReducer";
import { connect } from "react-redux";
import "./test.css";
// import local_IP from '../../local_IP';
const local_IP = require("../../local_IP") || "";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fullForm: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginTop: "5rem",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
      marginLeft: "1rem",
    },
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
      display: "flex",
      flex: "wrap",
      flexDirection: "column",
      alignItems: "center",
    },
    answer: {
      width: "10rem",
      marginTop: "1rem",
    },
  })
);

function CreateTest({ user, classrooms }: any): any {
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

  const classes = useStyles();
  const [current, setCurrent] = useState(0);
  const [dataSet, setDataSet] = useState([{}]);
  const [exam, setExam] = React.useState("");
  const [question, setQuestion] = React.useState("");
  const [classroom, setclassroom] = React.useState("");
  const [students, setStudents] = React.useState([]);
  const [correct, setCorrect] = React.useState("");
  const [choiceA, setChoiceA] = React.useState("");
  const [choiceB, setChoiceB] = React.useState("");
  const [choiceC, setChoiceC] = React.useState("");
  const [choiceD, setChoiceD] = React.useState("");

  useEffect(() => {
    console.log(user, classrooms);
  }, [user]);

  const handleClick = () => {
    if (
      question !== "" &&
      choiceA !== "" &&
      choiceB !== "" &&
      choiceC !== "" &&
      choiceD !== "" &&
      correct !== ""
    ) {
      let questionObj = {
        question: question,
        answers: [choiceA, choiceB, choiceC, choiceD],
        correct: correct,
      };
      setDataSet([...dataSet, questionObj]);
      setCurrent(current + 1);
      setQuestion("");
      setCorrect("");
      setChoiceA("");
      setChoiceB("");
      setChoiceC("");
      setChoiceD("");
    }
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setExam(event.target.value as string);
    console.log(
      exam,
      question,
      correct,
      choiceA,
      choiceB,
      choiceC,
      choiceD,
      dataSet,
      ">>",
      students,
      user
    );
  };

  const handleSubmit = () => {
    dataSet.shift();
    console.log({
      subjectID: user.subjectID,
      [exam]: dataSet,
      students: students,
    });
    let options: any = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        subjectID: user.subjectID,
        [exam]: dataSet,
        students: students,
      }),
    };
    let path =
      process.env.NODE_ENV === "production"
        ? `/exam/assign${exam}`
        : `${local_IP}/exam/assign${exam}`;
    fetch(path, options)
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className={classes.fullForm}>
      <div>
        <div>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Exam</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={exam}
              onChange={handleChange}
              label="Exam"
            >
              <MenuItem value={"firstExam"}>First Exam</MenuItem>
              <MenuItem value={"secondExam"}>Second Exam</MenuItem>
              <MenuItem value={"finalExam"}>Final Exam</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Class</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={classroom}
              onChange={(e: any) => {
                setStudents(e.target.value.students);
                setclassroom(e.target.value);
              }}
              label="Exam"
            >
              {classrooms.map((classroom: any, i: string) => {
                return (
                  <MenuItem value={classroom} key={i}>
                    {classroom.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className={classes.root}>
        <form noValidate autoComplete="off">
          <TextField
            id="outlined-multiline-static"
            label="Question"
            multiline
            rows={4}
            value={question}
            variant="outlined"
            onChange={(e: any) => setQuestion(e.target.value)}
          />
          <div>
            <TextField
              className={classes.selectEmpty}
              id="outlined-basic"
              label="A"
              value={choiceA}
              onChange={(e: any) => setChoiceA(e.target.value)}
              variant="outlined"
            />
            <TextField
              className={classes.selectEmpty}
              id="outlined-basic"
              label="B"
              value={choiceB}
              onChange={(e: any) => setChoiceB(e.target.value)}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              className={classes.selectEmpty}
              id="outlined-basic"
              label="C"
              value={choiceC}
              onChange={(e: any) => setChoiceC(e.target.value)}
              variant="outlined"
            />
            <TextField
              className={classes.selectEmpty}
              id="outlined-basic"
              label="D"
              value={choiceD}
              onChange={(e: any) => setChoiceD(e.target.value)}
              variant="outlined"
            />
          </div>
          <FormControl variant="outlined" className={classes.answer}>
            <InputLabel htmlFor="age-native-simple">Correct answer</InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={correct}
              onChange={(e: any) => setCorrect(e.target.value)}
              label="Correct answer"
            >
              <MenuItem value={0}>A</MenuItem>
              <MenuItem value={1}>B</MenuItem>
              <MenuItem value={2}>C</MenuItem>
              <MenuItem value={3}>D</MenuItem>
            </Select>
          </FormControl>
        </form>
        <Button variant="outlined" onClick={handleClick}>
          add
        </Button>
        <div>
          <p>Number of questions added {dataSet.length - 1}</p>
          <Button variant="outlined" onClick={handleSubmit}>
            Submit Exam
          </Button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: State) => {
  return {
    user: state.user,
    classrooms: state.classes,
  };
};

export default connect(mapStateToProps)(CreateTest);
