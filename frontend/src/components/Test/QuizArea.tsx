// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React , {useState} from 'react'
import './test.css'
import Question from './Question'
import AnswerList from './AnswerList'

const QuizArea=(props:any) =>{

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type style = {
        width: string;
        display: string;
        textAlign: string;
        boxSizing: string;
        float: string;
        padding: string;
    }
  
    // var style = {
    //   width: "25%",
    //   display: "block",
    //   textAlign: "center",
    //   boxSizing: "border-box",
    //   float: "left",
    //   padding: "0 2em"
    // }
    console.log('aaaaa',props)
    return(
    //   <div style={style} className="style1">
      <div className="style1">
  
        <Question dataSet={props.dataSet} />
        <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
      </div>
    )
  }


  export default QuizArea