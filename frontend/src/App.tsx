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
import { createClass } from "./actions/actions";
import { Dispatch } from "redux";
import React, { useEffect } from "react";
import Bills from "./pages/bills/Bills"
import ProfilePage from "./pages/profile/profilePage"
import DashboardPage from "./pages/dashboardPage/DashboardPage"
import SchedulePage from './pages/schedulePage/SchedulePage'
import "./App.css";
const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: green,
  },
});

const App = ({ user, importClass }: any) => {
  useEffect(() => {
    if (user.schoolID) {
      let options = {
        method: "get",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ schoolID: user.schoolID }),
      };
      let path =
        process.env.NODE_ENV === "production"
          ? "/classroom/getSchoolClasses/"
          : "http://localhost:8000/classroom/getSchoolClasses/";
      fetch(path, options)
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          importClass(data);
        });
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Header />
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" component={SignupForm} />
            <Route path="/signin" component={SignIn} />
            <Route path="/classes" component={Classes} />
            <Route exact path="/bills" component={Bills} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/dashboard" component={DashboardPage} />
            <Route exact path="/schedule" component={SchedulePage} />

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
  };
};

const mapStateToProps = (state: State) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
