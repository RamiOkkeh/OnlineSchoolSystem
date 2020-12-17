/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import RecipeReviewCardd from './CardStudent'
import { connect } from "react-redux";
import { State } from "../../reducers/rootReducer"


function StatsStudent({ testdata, user, test , exams }: any) {

    
    // console.log('test', exams)
    return (

        <div style={{ backgroundColor: "white", display: "flex", flexWrap: "wrap", flexDirection: "column", marginTop: "5rem", marginLeft: "17rem", marginRight: "10rem" }}>
            <div style={{ backgroundColor: "red", display: "flex", flexWrap: "wrap" }}>
                <div className="profile" style={{ backgroundColor: "green", flex: ".30", paddingTop: "1.5rem" }} ><div>
                    <img style={{ width: "170px", marginLeft: '.05rem', height: "160px", borderRadius: "100px " }}
                        src="https://ca.slack-edge.com/TTVPM20S0-U018HTXLNDD-c9c19858d7dc-512" />  </div>
                </div>
                <div style={{ backgroundColor: "gray", flex: ".70", display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
                    <div style={{ paddingTop: "1.5rem", display: 'flex', flexWrap: "wrap", justifyContent: "space-evenly" }}>
                        <div> first name :Ameed</div>
                        <div> last name : Asmah</div>
                    </div>
                    <div style={{ paddingTop: "3rem", paddingBottom: "1.5rem", display: 'flex', flexWrap: "wrap", justifyContent: "space-evenly" }}>
                        <div> position :Student</div>
                        <div> student Id : 11210385</div>
                    </div>
                    <div> GPA = { exams.length ?((exams.reduce((acc: number, subject: any) => acc + subject.firstGrade + subject.secondGrade + subject.finalGrade, 0)) / (exams.length * 3)).toFixed(2):0.0}% </div>
                </div>
            </div>
            <div style={{ display: 'flex', flexWrap: "wrap" }}>
                {exams.map((el: any, i: any) => (
                    <RecipeReviewCardd exam={el} key={i} />

                ))
                }


            </div>
        </div>
    )
}


const mapStateToProps = (state: State) => {
    return {
        test: state.test,
        schoolID: state.schoolID,
        user: state.user,
    };
};

export default connect(mapStateToProps)(StatsStudent);

