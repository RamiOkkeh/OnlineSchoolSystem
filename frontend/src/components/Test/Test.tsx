import React, { useState } from 'react'
import './test.css'
import ScoreArea from './scoreArea'
import QuizArea from './QuizArea'




function Test(): any {

  type dataSetType = {
    question: any;
    answer: string[];
    correct: number;
    incorrect: string[];
  }


  // to do get request fetch exam data
  var dataSetExample = [
    {
      question: "What is 8 x 1?",
      answers: [
        "1",
        "8",
        "16",
        "9"
      ],
      correct: 1
    },
    {
      question: "Who is Steve Jobs?",
      answers: [
        "CEO of Microsoft",
        "Barber in NY",
        "Movie Star",
        "CEO of Apple"
      ],
      correct: 3
    },
    {
      question: "Metallica is a ____ band",
      answers: [
        "Blues",
        "Hard-Rock",
        "Jazz",
        "Metal"
      ],
      correct: 3
    },
    {
      question: "IS is a ____",
      answers: [
        "Word",
        "Band",
        "Terror Group",
        "Brand"
      ],
      correct: 2
    },
    {
      question: "Who was Einstein",
      answers: [
        "A Scientist",
        "A Dentist",
        "A Serial Killer",
        "None of the above"
      ],
      correct: 0
    },
    {
      question: "JavaScript can be used in ____ development",
      answers: [
        "Back-End",
        "Front-End",
        "ReactJS",
        "All of the Above"
      ],
      correct: 3
    },
    {
      question: "Hitler was a",
      answers: [
        "Mass Murderer",
        "Dictator",
        "Jew",
        "None of the above",
        "All of the above"
      ],
      correct: 4
    },
    {
      question: "Korn is a",
      answers: [
        "Nu-Metal band",
        "Religion",
        "Singer"
      ],
      correct: 0
    },
    {
      question: "Windows computers are",
      answers: [
        "Horrible",
        "Great",
        "Cheap",
        "Invented by Bill Gates"
      ],
      correct: 3
    },
    {
      question: "The BigBan stands in",
      answers: [
        "Egypt",
        "London",
        "Amsterdam",
        "NewYork"
      ],
      correct: 1
    },
  ];

  const [current, setCurrent] = useState(0);
  const [dataSet, setDataSet] = useState(dataSetExample);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  const handleClick = (choice: any) => {
    console.log('correct', correct, dataSet[current].correct, choice)
    if (choice === dataSet[current].correct) {
      setCorrect(correct + 1)
      console.log('correct', correct, dataSet[current].correct, choice)
    } else {
      setIncorrect(incorrect + 1)
    }

    if (current === 9) {
      setCurrent(0)
      setIncorrect(0)
      setCorrect(0)
      // to do post request add test result to db
    } else {
      setCurrent(current + 1)
      // console.log('current',current)
    }
  }

  // console.log('correct',correct)
  return (

    <div style={{ marginLeft: "14rem", marginTop: "3rem" }}>
      <ScoreArea correct={correct} incorrect={incorrect} />
      <QuizArea handleClick={handleClick} dataSet={dataSet[current]} />
    </div>
  )

}
export default Test
