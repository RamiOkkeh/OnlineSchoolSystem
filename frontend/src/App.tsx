import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import green from "@material-ui/core/colors/green";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Classes from "./pages/Classes/Classes";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import { State } from "./reducers/rootReducer";
import SignupForm from "./pages/SignupForm/SignupForm";
import SignIn from "./pages/Signin/Signin";
import Home from "./pages/Home/Home";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import React, { useEffect, useState } from "react";
import Bills from "./pages/bills/Bills";
import ProfilePage from "./pages/profile/profilePage";
import DashboardPage from "./pages/dashboardPage/DashboardPage";
import SchedulePage from "./pages/schedulePage/SchedulePage";
import TestPage from "./pages/testpage/TestPage";
import StatsPage from "./pages/stats/StatsPage";
import EditClass from "./pages/EditClass/EditClass";
import "./App.css";
import {
  createClass,
  setRole,
  setUser,
  waiting,
  setUserDetails,
} from "./actions/actions";
// import P5Wraper from "react-p5-wrapper";
import sketch from "./ml5Training";

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: green,
  },
});

const App = ({
  user,
  importClass,
  importWaiting,
  setUser,
  setRole,
  setUserDetail,
}: any) => {
  useEffect(() => {
    let token = localStorage.getItem("Authorization");
    if (token) {
      let options = {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      };
      let path =
        process.env.NODE_ENV === "production"
          ? "/auth/users/me/"
          : "http://localhost:8000/auth/users/me/";
      fetch(path, options)
        .then((data) => data.json())
        .then((data) => {
          console.log(">>>>", data);
          setRole(data.role);
          // setUser(data);
          setUserDetail(data);
          let options: any = {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
            body: JSON.stringify({ userID: data.id }),
          };
          let path =
            process.env.NODE_ENV === "production"
              ? `/${data.role.toLowerCase()}/details`
              : `http://localhost:8000/${data.role.toLowerCase()}/details`;
          fetch(path, options)
            .then((data) => data.json())
            .then((data) => {
              console.log(data[0]);
              setUser(data[0]);
              let options = {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ schoolID: data[0].schoolID }),
              };
              let path =
                process.env.NODE_ENV === "production"
                  ? "/classroom/getSchoolClasses"
                  : "http://localhost:8000/classroom/getSchoolClasses";
              fetch(path, options)
                .then((data) => data.json())
                .then((data) => {
                  console.log(data);
                  importClass(data);
                  let options = {
                    method: "get",
                    headers: { "Content-Type": "application/json" },
                  };
                  let path =
                    process.env.NODE_ENV === "production"
                      ? "/classroom/"
                      : "http://localhost:8000/classroom/";
                  fetch(path, options)
                    .then((data) => data.json())
                    .then((data) => {
                      console.log(data[0]);
                      importWaiting(data[0]);
                    });
                });
            });
        });
    }
  }, []);
  sketch([10, 10, 10, 10, 10, 10, 10, 10, 10]);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          {/* <P5Wraper style={{ zIndex: "200" }} sketch={sketch}></P5Wraper> */}
          <Header />
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" component={SignupForm} />
            <Route path="/signin" component={SignIn} />
            <Route path="/classes" component={Classes} />
            <Route path="/editclass" component={EditClass} />
            <Route exact path="/bills" component={Bills} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/dashboard" component={DashboardPage} />
            <Route exact path="/schedule" component={SchedulePage} />
            <Route exact path="/tests" component={TestPage} />
            <Route exact path="/stats" component={StatsPage} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
};

// const mapDispatchToProps = (dispatch: Dispatch) => {
//   return {
//     changeState: (newState: State) => {},
//   };
// };

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    importClass: (z: any) => dispatch(createClass(z)),
    setUser: (z: any) => dispatch(setUser(z)),
    setRole: (z: any) => dispatch(setRole(z)),
    importWaiting: (z: any) => dispatch(waiting(z)),
    setUserDetail: (z: any) => dispatch(setUserDetails(z)),
  };
};

const mapStateToProps = (state: State) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
