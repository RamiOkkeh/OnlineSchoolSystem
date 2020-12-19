
import React from "react";
import "./profileBody.css";
import { connect } from "react-redux";
import { State } from "../../reducers/rootReducer";



function Profile({ profile,user }: any) {
  console.log('myuser',user);
  return (
    <div style={{ maxWidth: "1700px", marginTop: "63px", marginLeft: "150px" }}>
      <div style={{}}>
        <div className="background_img">
          <img
            style={{
              width: "160px",
              marginTop: "30px",
              marginRight: "57rem",
              height: "160px",
              borderRadius: "80px ",
            }}
            src="https://ca.slack-edge.com/TTVPM20S0-U018HTXLNDD-c9c19858d7dc-512"
            alt=""
          />
          <div
            style={{
              marginLeft: "55px",
              display: "flex",
              justifyContent: "space-around",
              width: "15%",
            }}
          >
            <h3 style={{ margin: "0px", color: "white" }}>{user.studentName}</h3>
            <div
              style={{ paddingLeft: "5px", margin: "0px", marginTop: "5px" }}
              className="active"
            ></div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", height: "52vh" }}>
        <div
          style={{
            flex: ".27",
            backgroundColor: "#f2f2f2",
            boxShadow: "3px 3px #d9d9d9",
            borderTopLeftRadius: "45px",
          }}
        >
          <div>
            <h3 style={{ padding: "30px 10px 20px 15px" }}>{user.studentName}</h3>
            <h4 style={{ padding: "0 10px 20px 15px" }}>
              classRoom:
              {user.classroomName}
            </h4>
            <h4 style={{ padding: "0 10px 20px 15px" }}>
              
              schoolName :{user.schoolName}
            </h4>
            <h4 style={{ padding: "0 10px 20px 15px" }}>
              
              userId :{user.userID}
            </h4>
            {/* <h4 style={{ padding: "0 10px 20px 15px" }} > number of reservations :5</h4> */}
          </div>
        </div>
        <div style={{ flex: ".73" }}>
          {/* <DisabledTabs  /> */}
          {/* component code for FAVORITES*/}
          <div className="gallery"></div>
        </div>
      </div>
    </div>
  );
}



const mapStateToProps = (state: State) => {
  return {
      user: state.user,
  };
};
export default connect(mapStateToProps)(Profile);

