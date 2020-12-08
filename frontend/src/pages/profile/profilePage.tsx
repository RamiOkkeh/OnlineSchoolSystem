import React from 'react';
import Profile from "../../components/profile/profileStudent"
import ProfileTeacher from "../../components/profile/profileTeacher"
import ProfilePrincipal from "../../components/profile/profilePrincipal"
import { connect } from "react-redux";
import { State } from "../../reducers/rootReducer";

function ProfilePage({ role }: any) {
    console.log(role);
    return (
        <div>

            {role === "Student" ?
                <Profile /> :
                role === "Teacher" ?
                    <ProfileTeacher /> : role === "Principal" ?
                        <ProfilePrincipal /> : <></>
            }
        </div>
    )
}

const mapStateToProps = (state: State) => {
    return {
        role: state.role
    };
};
export default connect(mapStateToProps)(ProfilePage);
