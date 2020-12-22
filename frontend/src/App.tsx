import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";
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
import React, { useEffect } from "react";
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
import local_IP from "./local_IP";
import Chat from "./components/chat/chat";

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
          : `${local_IP}/auth/users/me/`;
      fetch(path, options)
        .then((data) => data.json())
        .catch((err) => alert(err))
        .then((data) => {
          console.log(">>>>", data);
          if (data.code) {
            localStorage.removeItem("Authorization")
            window.location.reload()
          } else {
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
                : `${local_IP}/${data.role.toLowerCase()}/details`;
            fetch(path, options)
              .then((data) => data.json())
              .then((data) => {
                console.log('>>>>>>>>ss>>>', data[0]);
                setUser(data[0]);
                let options = {
                  method: "post",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ schoolID: data[0].schoolID }),
                };
                let path =
                  process.env.NODE_ENV === "production"
                    ? "/classroom/getSchoolClasses"
                    : `${local_IP}/classroom/getSchoolClasses`;
                fetch(path, options)
                  .then((data) => data.json())
                  .then((data) => {
                    // console.log('>>>>>>>classes>>>>>>>>', data);
                    importClass(data);
                    let options = {
                      method: "get",
                      headers: { "Content-Type": "application/json" },
                    };
                    let path =
                      process.env.NODE_ENV === "production"
                        ? "/classroom/"
                        : `${local_IP}/classroom/`;
                    fetch(path, options)
                      .then((data) => data.json())
                      .then((data) => {
                        // console.log(data[0]);
                        importWaiting(data[0]);
                      });
                  });
              });
          }
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {

  }, [user])
  sketch([10, 10, 10, 10, 10, 10, 10, 10, 10]);
  console.log("APP", user.userID)
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
            <Route exact path="/dashboard" component={DashboardPage} />
            <Route exact path="/schedule" render={props => localStorage.getItem("Authorization") ? <SchedulePage /> : <Redirect to="/" />} />
            <Route path="/classes" render={props => localStorage.getItem("Authorization") ? <Classes /> : <Redirect to="/" />} />
            <Route path="/editclass" render={props => localStorage.getItem("Authorization") ? <EditClass /> : <Redirect to="/" />} />
            <Route exact path="/bills" render={props => localStorage.getItem("Authorization") ? <Bills /> : <Redirect to="/" />} />
            <Route exact path="/profile" render={props => localStorage.getItem("Authorization") ? <ProfilePage /> : <Redirect to="/" />} />
            <Route exact path="/tests" render={props => localStorage.getItem("Authorization") ? <TestPage /> : <Redirect to="/" />} />
            <Route exact path="/stats" render={props => localStorage.getItem("Authorization") ? <StatsPage /> : <Redirect to="/" />} />
            <Route exact path="/classroom" render={props => localStorage.getItem("Authorization") ? <Chat /> : <Redirect to="/" />} />
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
