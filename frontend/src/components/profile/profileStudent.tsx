
import React, { useEffect, useState } from "react";
import "./profileBody.css";
import { connect } from "react-redux";
import { State } from "../../reducers/rootReducer";
import local_IP from "../../local_IP";
import MediaCard from "./profileImg";



function Profile({ profile, user, userDetails }: any) {
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setImage(userDetails.img)
  }, [userDetails])


  const uploadImage = async (e) => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files['0'])
    data.append('upload_preset', 'dquts6y1')
    console.log('asasasa', files['0'])

    setLoading(true)
    const requestOptions = {
      method: 'POST',
      body: data
    };
    console.log('aaaaa', data)

    fetch("https://api.cloudinary.com/v1_1/coronaschool/image/upload", requestOptions)
      .then(response => response.json())
      .then(res => {
        console.log('aaaaa1111', res)
        setImage(res.secure_url)
        setLoading(false)
        //
        let options = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userID: user.userID, img: res.secure_url })
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
      })
  }


  console.log('myuser', image);
  return (
    <div style={{ maxWidth: "1700px", marginTop: "63px", marginLeft: "150px" }}>
      <div style={{}}>
        <div className="background_img">
          <div style={{ display: 'flex', flexDirection: "column", marginLeft: '5%', justifyContent: 'center' }}>
            <MediaCard uploadImage={uploadImage} image={image} user={user} />
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
            {/* <h3 style={{ padding: "30px 10px 20px 15px" }}>{user.studentName}</h3> */}
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
    userDetails: state.userDetails,
  };
};
export default connect(mapStateToProps)(Profile);
