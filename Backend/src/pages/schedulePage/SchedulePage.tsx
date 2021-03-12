import React from 'react'
import Schedule from '../../components/schedule/Schedule'
import SchedulePrincipal from '../../components/schedule/SchedulePrincipal'
import {connect} from "react-redux";
import { State } from "../../reducers/rootReducer";

 function SchedulePage({role}:any) {
    return ( 

        <div>
            { role ==="Student" ?
            <Schedule />  :
            role ==="Principal" ?
            <SchedulePrincipal /> :
            <Schedule />
            }
            
        </div>
    )
}

const mapStateToProps = (state: State) => {
    return {
        role: state.role
    };
};
export default connect(mapStateToProps)(SchedulePage);