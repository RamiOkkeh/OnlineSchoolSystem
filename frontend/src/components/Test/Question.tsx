import React from 'react'
import './test.css'

const Question = (props: any) => {
  var style = {
    color: "#3BA93F",
    paddingLeft:70,
    paddingRight:70,

  }
  return (
    <h1 style={style}>{props.dataSet.question}</h1>
  )
}

export default Question
