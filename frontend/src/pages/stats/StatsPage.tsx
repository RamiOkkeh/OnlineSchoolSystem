import React, { useState, useEffect } from 'react'
import StatsStudent from '../../components/stats/StatsStudent'
import { connect } from "react-redux";
import { State } from "../../reducers/rootReducer"

function Stats({ testdata, user, test }: any) {


    const [subjects, setSubjects] = React.useState([])
    const [exams, setExams] = React.useState([{}])
    console.log("exams", exams);

    return (
        <div>
            <StatsStudent />
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
export default connect(mapStateToProps)(Stats);