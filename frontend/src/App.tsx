import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import green from "@material-ui/core/colors/green";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { changeState } from "./actions/actions";
import Classes from "./pages/Classes/Classes";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import { State } from "./reducers/rootReducer";
import SignUp from "./pages/Signup/Signup";
import SignIn from "./pages/Signin/Signin";
import Home from "./pages/Home/Home";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import React from "react";
import "./App.css";

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
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeState: (newState: State) => {
      dispatch(changeState(newState));
    },
  };
};

const mapStateToProps = (state: State) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
