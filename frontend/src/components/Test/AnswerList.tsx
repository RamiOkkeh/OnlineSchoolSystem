import React from 'react'
import './test.css'
import Answer from './Answer'
  // const Answer=({props}:any)=> {
  //   var style = {
  //     width: "100%",
  //     height: 50,
  //     color: "blue"
  //   }
    
  //   console.log('answer',props)
  //   return(
  //     <div>
  //       <button style={style} onClick={() => props.handleClick(props.choice)}>{props.answer}</button>
  //     </div>
  //   )
  // }


const AnswerList=(props:any) =>{
   
    // console.log('moooomo',props)
    return(
      <div>
        {
          props.dataSet.answers.map( ( answer:any,i:any ) => <Answer choice={i} key={i} answer={answer} handleClick={props.handleClick}/> )
        }
      </div>
    )
  }

export default AnswerList;