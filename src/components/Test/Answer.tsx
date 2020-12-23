import React from 'react'

  const Answer=(props:any)=> {
    var style = {
      width: "100%",
      height: 50,
      backgroundColor:'#4caf5060',
      border:'1px',
      borderRadius:'15px',
      boxShadow:' 2px 3px #888888'
    }
    
    // console.log('answerssssss',props)
    return(
      <div style={{margin:'10px', width:'180px'}}>
        <button style={style} onClick={() => props.handleClick(props.choice)}>{props.answer}</button>
      </div>
    )
  }

export default Answer
