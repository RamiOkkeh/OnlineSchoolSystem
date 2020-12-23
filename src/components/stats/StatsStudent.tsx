/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import RecipeReviewCardd from "./CardStudent";
import { connect } from "react-redux";
import { State } from "../../reducers/rootReducer";
import model from "../../ml5Training";

function StatsStudent({ testdata, user, test, exams, userDetails }: any) {
  const [status, setStatus] = React.useState([]);

  React.useEffect(() => {
    model([10, 10, 10, 10, 10], async (results: any) => {
      let res: any = [results.label, results.confidence];
      await setStatus(res);
      console.log("test", test, status, results);
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        marginTop: "5rem",
        marginLeft: "17rem",
        marginRight: "10rem",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div className="profile" style={{ flex: ".30", paddingTop: "1.5rem" }}>
          <div>
            <img
              style={{
                width: "170px",
                marginLeft: ".05rem",
                height: "160px",
                borderRadius: "100px ",
              }}
              src={
                userDetails.img !== "null"
                  ? userDetails.img
                  : "https://media.discordapp.net/attachments/762721371809382421/791010214941818920/115-1150152_default-profile-picture-avatar-png-green.png"
              }
            />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#A8E36D40",
            flex: ".70",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            borderRadius: "50px",
          }}
        >
          <div
            style={{
              paddingTop: "1.5rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            <div> Name: {user.studentName}</div>
            <div> Status: {status[0]}</div>
          </div>
          <div
            style={{
              paddingTop: "3rem",
              paddingBottom: "1.5rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
            }}
          >
            <div> Position: Student</div>
            <div> student Id: {user.userID}</div>
          </div>
          <div>
            {" "}
            GPA ={" "}
            {exams.length
              ? (
                  exams.reduce(
                    (acc: number, subject: any) =>
                      acc +
                      subject.firstGrade +
                      subject.secondGrade +
                      subject.finalGrade,
                    0
                  ) /
                  (exams.length * 3)
                ).toFixed(2)
              : 0.0}
            %{" "}
          </div>
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {exams.map((el: any, i: any) => (
          <RecipeReviewCardd exam={el} key={i} />
        ))}
      </div>
    </div>
    //     <div
    //       style={{
    //         backgroundColor: "#A8E36D40",
    //         flex: ".70",
    //         display: "flex",
    //         flexWrap: "wrap",
    //         flexDirection: "column",
    //         borderRadius: "50px",
    //       }}
    //     >
    //       <div
    //         style={{
    //           paddingTop: "1.5rem",
    //           display: "flex",
    //           flexWrap: "wrap",
    //           justifyContent: "space-evenly",
    //         }}
    //       >
    //         <div> Name: {user.studentName}</div>
    //         <div> Status: {status[0]}</div>
    //       </div>
    //       <div
    //         style={{
    //           paddingTop: "3rem",
    //           paddingBottom: "1.5rem",
    //           display: "flex",
    //           flexWrap: "wrap",
    //           justifyContent: "space-evenly",
    //         }}
    //       >
    //         <div> Position: Student</div>
    //         <div> student Id: {user.userID}</div>
    //       </div>
    //       <div>
    //         {" "}
    //         GPA ={" "}
    //         {exams.length
    //           ? (
    //               exams.reduce(
    //                 (acc: number, subject: any) =>
    //                   acc +
    //                   subject.firstGrade +
    //                   subject.secondGrade +
    //                   subject.finalGrade,
    //                 0
    //               ) /
    //               (exams.length * 3)
    //             ).toFixed(2)
    //           : 0.0}
    //         %{" "}
    //       </div>
    //     </div>
    //   </div>
    //   <div style={{ display: "flex", flexWrap: "wrap" }}>
    //     {exams.map((el: any, i: any) => (
    //       <RecipeReviewCardd exam={el} key={i} />
    //     ))}
    //   </div>
    // </div>
    //   </div>
    //   <div style={{ display: "flex", flexWrap: "wrap" }}>
    //     {exams.map((el: any, i: any) => (
    //       <RecipeReviewCardd exam={el} key={i} />
    //     ))}
    //   </div>
    // </div>
  );
}

const mapStateToProps = (state: State) => {
  return {
    test: state.test,
    schoolID: state.schoolID,
    user: state.user,
    userDetails: state.userDetails,
  };
};

export default connect(mapStateToProps)(StatsStudent);
