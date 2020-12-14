import React from 'react'
// import Quizz from '../../components/Test/Testone'
import Test from '../../components/Test/Test'
import { connect } from "react-redux";
import { State } from "../../reducers/rootReducer";
import CreateTest from '../../components/Test/CreateTest';

function TestPage() {
    return (
        <div>
            {/* {
                user.role ?
            } */}
            {/* <Test /> */}
            <CreateTest />
        </div>
    )
}

const mapStateToProps = (state: State) => {
    return {
        user: state.user,
    };
};

export default connect(mapStateToProps)(TestPage)
