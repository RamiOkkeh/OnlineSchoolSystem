import React from 'react'
import './test.css'

const Question=(props:any)=> {
    var style = {
      color: "red",
    }
    return (
      <h1 style={style}>{props.dataSet.question}</h1>
    )
  }
  
  const Answer=(props:any)=> {

    type style= {
        width: string;
        height: number;
        color: string;
    }

    var style = {
      width: "100%",
      height: 50,
      color: "blue"
    }
    // console.log(props)
    return(
      <div>
        <button style={style} onClick={() => props.handleClick(props.choice)}>{props.answer}</button>
      </div>
    )
  }

export default Question