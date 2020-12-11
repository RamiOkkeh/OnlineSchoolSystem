// /* eslint-disable @typescript-eslint/no-redeclare */


// import React , {useState} from 'react'
// import './test.css'
// const Quizz = ()=>{

//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const Test = ()=> {

//     type dataSet={
//         question:any;
//         answer:string[];
//         correct:number;

//     }
      
//       var dataSet = [
//         {
//           question: "What is 8 x 1?",
//           answers: [
//             "1",
//             "8",
//             "16",
//             "9"
//           ],
//           correct: 1
//         },
//         {
//           question: "Who is Steve Jobs?",
//               answers: [
//                 "CEO of Microsoft",
//                 "Barber in NY",
//                 "Movie Star",
//                 "CEO of Apple"
//               ],
//               correct: 3
//         },
//          {
//               question: "Metallica is a ____ band",
//               answers: [
//                 "Blues",
//                 "Hard-Rock",
//                 "Jazz",
//                 "Metal"
//               ],
//               correct: 3
//             },
//             {
//               question: "IS is a ____",
//               answers: [
//                 "Word",
//                 "Band",
//                 "Terror Group",
//                 "Brand"
//               ],
//               correct: 2
//             },
//             {
//               question: "Who was Einstein",
//               answers: [
//                 "A Scientist",
//                 "A Dentist",
//                 "A Serial Killer",
//                 "None of the above"
//               ],
//               correct: 0
//             },
//             {
//               question: "JavaScript can be used in ____ development",
//               answers: [
//                 "Back-End",
//                 "Front-End",
//                 "ReactJS",
//                 "All of the Above"
//               ],
//               correct: 3
//             },
//             {
//               question: "Hitler was a",
//               answers: [
//                 "Mass Murderer",
//                 "Dictator",
//                 "Jew",
//                 "None of the above",
//                 "All of the above"
//               ],
//               correct: 4
//             },
//             {
//               question: "Korn is a",
//               answers: [
//                 "Nu-Metal band",
//                 "Religion",
//                 "Singer"
//               ],
//               correct: 0
//             },
//             {
//               question: "Windows computers are",
//               answers: [
//                 "Horrible",
//                 "Great",
//                 "Cheap",
//                 "Invented by Bill Gates"
//               ],
//               correct: 3
//             },
//             {
//               question: "The BigBan stands in",
//               answers: [
//                 "Egypt",
//                 "London",
//                 "Amsterdam",
//                 "NewYork"
//               ],
//               correct: 1
//             },
//       ];
      
//       const [current,setCurrent] = useState(0);
//       // eslint-disable-next-line @typescript-eslint/no-unused-vars
//       const [dataSet1,setDataSet] = useState(dataSet);
//       const [correct,setCorrect] = useState(0);
//       const [incorrect,setIncorrect] = useState(0); 
   
         
//      // end constructor
    
//     const handleClick = (choice:any , current:number ,incorrect:number , correct:number )=> {
//       if (choice === dataSet[current].correct) {
//         setCorrect(correct + 1)
//       } else {
//         setIncorrect(incorrect + 1)
//       }
      
//       if (current === 9) {
//         setCurrent(current= 0)
//         setIncorrect(incorrect= 0)
//         setCorrect(correct=0)
//       } else {
//         setCurrent(current + 1) 
//       }
//     }
   

//       return (

//         <div style={{marginLeft:"14rem",marginTop:"3rem"}}>
//           <ScoreArea correct={correct} incorrect={incorrect} />
//           <QuizArea handleClick={handleClick} dataSet={dataSet1[current]} />
//         </div>
//       ) 
//     }}

//   const Question=(props:any)=> {
//     var style = {
//       color: "red",
//     }
//     return (
//       <h1 style={style}>{props.dataSet.question}</h1>
//     )
//   }
  
//   const Answer=(props:any)=> {

//     type style= {
//         width: string;
//         height: number;
//         color: string;
//     }

//     var style = {
//       width: "100%",
//       height: 50,
//       color: "blue"
//     }
//     console.log(props)
//     return(
//       <div>
//         <button style={style} onClick={() => props.handleClick(props.choice)}>{props.answer}</button>
//       </div>
//     )
//   }
  
//   const AnswerList=(props:any) =>{
//     var answers = []
//     for (let i = 0; i < props.dataSet.answers.length; i++) {
//       answers.push(<Answer choice={i} handleClick={props.handleClick} answer={props.dataSet.answers[i]} />)
//     }
//     return(
//       <div>
//         {answers}
//       </div>
//     )
//   }
  
//   const QuizArea=(props:any) =>{

//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     type style = {
//         width: string;
//         display: string;
//         textAlign: string;
//         boxSizing: string;
//         float: string;
//         padding: string;
//     }

//     // var style = {
//     //   width: "25%",
//     //   display: "block",
//     //   textAlign: "center",
//     //   boxSizing: "border-box",
//     //   float: "left",
//     //   padding: "0 2em"
//     // }
//     return(
//     //   <div style={style} className="style1">
//       <div className="style1">

//         <Question dataSet={props.dataSet} />
//         <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
//       </div>
//     )
//   }
  
//   const TotalCorrect=(props:any) =>{
//       var style = {
//       display: "inline-block",
//       padding: "1em",
//       background: "#eee",
//       margin: "0 1em 0 0"
//     }
//     return(
//       <h2 style={style}>Correct: {props.correct}</h2>
//     )
//   }
  
//   function TotalIncorrect(props:any) {
//     var style = {
//       display: "inline-block",    
//       padding: "1em",
//       background: "#eee",
//       margin: "0 0 0 1em"
//     }
//     return(
//       <h2 style={style}>Incorrect: {props.incorrect}</h2>
//     )
//   }
  
//   function ScoreArea(props:any) {

//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     type style = {
//         width: string;
//         display: string;
//         textAlign: string;
//         float: string;
//         padding: string;
//     }    

//     // var style = {
//     //   width: "100%",
//     //   display: "block",
//     //   textAlign: "left",
//     //   float: "left",
//     //   padding: "2em"
//     // }
//     return(
//     //   <div style={style} >
//       <div  className="style2" >

//         <TotalCorrect correct={props.correct} />
//         <TotalIncorrect incorrect={props.incorrect} />
//       </div>
//     )
//     }
//     export default Quizz


import React from 'react'

export default function testtwo() {
    return (
        <div>
            
        </div>
    )
}