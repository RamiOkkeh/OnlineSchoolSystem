import React, { useEffect, useState } from "react";
import "./profileBody.css";
import { connect } from "react-redux";
import { State } from "../../reducers/rootReducer";
import MediaCard from "./profileImg";
// import local_IP from "../../local_IP";
var local_IP;
try {
  local_IP = require("../../local_IP").default;
} catch {
  local_IP = "";
}

function ProfileTeacher({ userDetails, user, Classes }: any) {
  // console.log('ssssss', userDetails,'user',user,'classes',Classes);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setImage(userDetails.img);
  }, [userDetails]);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files["0"]);
    data.append("upload_preset", "dquts6y1");
    console.log("asasasa", files["0"]);

    setLoading(true);
    const requestOptions = {
      method: "POST",
      body: data,
    };
    console.log("aaaaa", data);

    fetch(
      "https://api.cloudinary.com/v1_1/coronaschool/image/upload",
      requestOptions
    )
      .then((response) => response.json())
      .then((res) => {
        console.log("aaaaa1111", res);
        setImage(res.secure_url);
        setLoading(false);
        //
        let options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userID: user.userID, img: res.secure_url }),
        };
        let path =
          process.env.NODE_ENV === "production"
            ? "/users/uploadImg"
            : `${local_IP}/users/uploadImg`;
        fetch(path, options)
          .then((data) => data.json())
          .then((data) => {
            console.log(">>>>>>", data);
          });
      });
  };

  return (
    <div style={{ maxWidth: "1700px", marginTop: "63px", marginLeft: "150px" }}>
      <div style={{}}>
        <div className="background_img">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "5%",
              justifyContent: "center",
            }}
          >
            <MediaCard
              uploadImage={uploadImage}
              image={
                image !== "null"
                  ? image
                  : "https://media.discordapp.net/attachments/762721371809382421/791010214941818920/115-1150152_default-profile-picture-avatar-png-green.png"
              }
              user={user}
            />
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
            <h3 style={{ padding: "30px 10px 20px 15px" }}>
              {" "}
              TeacherName:{user.teacherName}
            </h3>
            <h4 style={{ padding: "0 10px 20px 15px" }}>
              email:{userDetails.email}
            </h4>
            {/* <h4 style={{ padding: "0 10px 20px 15px" }}> number of Students :2 </h4> */}
            <h4 style={{ padding: "0 10px 20px 15px" }}>
              {" "}
              Subject Name :{user.subjectName}
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
    userDetails: state.userDetails,
    classes: state.classes,
  };
};
export default connect(mapStateToProps)(ProfileTeacher);
