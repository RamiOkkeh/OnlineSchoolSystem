import React , {useState} from 'react'
import './test.css'
import TotalCorrect from './TotalCorrect'
import TotalIncorrect from './TotalIncorrect'


function ScoreArea(props:any) {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type style = {
        width: string;
        display: string;
        textAlign: string;
        float: string;
        padding: string;
    }    

    // var style = {
    //   width: "100%",
    //   display: "block",
    //   textAlign: "left",
    //   float: "left",
    //   padding: "2em"
    // }
    console.log('ameeed',props)
    return(
    //   <div style={style} >
      <div  className="style2" >

        <TotalCorrect correct={props.correct} />
        <TotalIncorrect incorrect={props.incorrect} />
      </div>
    )
    }

    export default ScoreArea