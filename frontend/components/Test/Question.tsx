import React from 'react'
import './test.css'

const Question = (props: any) => {
  var style = {
    color: "red",
  }
  return (
    <h1 style={style}>{props.dataSet.question}</h1>
  )
}

export default Question
