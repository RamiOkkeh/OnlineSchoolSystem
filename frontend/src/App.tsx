import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { changeState } from "./actions/actions";
import Header from "./components/Header/Header";
import { State } from "./reducers/rootReducer";
import SignUp from "./pages/Signup/Signup";
import SignIn from "./pages/Signin/Signin";
import Home from "./pages/Home/Home";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import React from "react";
import "./App.css";

interface Props {
  test23: Array<String>;
  changeState: Function;
}

const App: React.FC<Props> = ({ test23, changeState }) => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </Router>
    </div>
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
  return {
    test23: state.test,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
