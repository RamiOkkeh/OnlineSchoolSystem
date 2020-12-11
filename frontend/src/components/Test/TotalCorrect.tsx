import React from 'react'

const TotalCorrect=(props:any) =>{
    var style = {
    display: "inline-block",
    padding: "1em",
    background: "#eee",
    margin: "0 1em 0 0"
  }
  return(
    <h2 style={style}>Correct: {props.correct}</h2>
  )
}

export default TotalCorrect