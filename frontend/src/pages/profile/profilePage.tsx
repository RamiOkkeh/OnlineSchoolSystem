import React from 'react';
import Profile from "../../components/profile/profileStudent"
import ProfileTeacher from "../../components/profile/profileTeacher"
import ProfilePrincipal from "../../components/profile/profilePrincipal"
import { connect } from "react-redux";
import { State } from "../../reducers/rootReducer";
import { profile } from 'console';

function ProfilePage({ role, user }: any) {
    console.log('user', user)
    return (
        <div>
            {role === "Student" ?
                <Profile user={user} />
                :
                role === "Teacher" ?
                    <ProfileTeacher  /> : role === "Principal" ?
                        <ProfilePrincipal  /> : <></>
            }
        </div>
    )
}

const mapStateToProps = (state: State) => {
    return {
        role: state.role,
        user: state.user,
    };
};
export default connect(mapStateToProps)(ProfilePage);
