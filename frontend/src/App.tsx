import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import green from "@material-ui/core/colors/green";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Classes from "./pages/Classes/Classes";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import { State } from "./reducers/rootReducer";
import SignUp from "./pages/Signup/Signup";
import SignIn from "./pages/Signin/Signin";
import Home from "./pages/Home/Home";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Dispatch } from "redux";
import React from "react";
import Bills from "./pages/bills/Bills"
import ProfilePage from "./pages/profile/profilePage"
import DashboardPage from "./pages/dashboardPage/DashboardPage"
import SchedulePage from './pages/schedulePage/SchedulePage'
import TestPage from './pages/testpage/TestPage'
// import Quiz from './components/test/Testone'
// import Quizz from './components/test/testtwo'
import "./App.css";
import { connect } from "react-redux";
const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: green,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Header />
          <Navbar /> 
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/classes" component={Classes} />
            <Route exact path="/bills" component={Bills} />
            <Route exact path="/profile" component={ProfilePage} />
            <Route exact path="/dashboard" component={DashboardPage} />
            <Route exact path="/schedule" component={SchedulePage} />
            <Route exact path="/tests" component={TestPage} />
            {/* <Route exact path="/test1" component={Quiz} /> */}
            {/* <Route exact path="/test2" component={Quizz} /> */}



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

const mapStateToProps = (state: State) => {
  return {};
};

export default connect(mapStateToProps)(App);
