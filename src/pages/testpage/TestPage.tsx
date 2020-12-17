import React, { useEffect } from 'react'
// import Quizz from '../../components/Test/Testone'
import Test from '../../components/Test/Test'
import { connect } from "react-redux";
import { State } from "../../reducers/rootReducer";
import CreateTest from '../../components/Test/CreateTest';

function TestPage({ userDetails }: any) {

    return (
        <div>
            {
                userDetails.role === 'Student' ?
                    <Test /> :
                    <CreateTest />
            }
        </div >
    )
}

const mapStateToProps = (state: State) => {
    return {
        userDetails: state.userDetails,
    };
};

export default connect(mapStateToProps)(TestPage)
