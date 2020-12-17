import React from 'react'

  const Answer=(props:any)=> {
    var style = {
      width: "100%",
      height: 50,
      color: "blue"
    }
    
    // console.log('answerssssss',props)
    return(
      <div>
        <button style={style} onClick={() => props.handleClick(props.choice)}>{props.answer}</button>
      </div>
    )
  }

export default Answer
