import React from 'react';
// import logo from './logo.svg';
import './App.css';
import SignUp from './Signup/Signup'
import { connect } from 'react-redux'
import { State } from './reducers/rootReducer'
import { Dispatch } from 'redux';
import { changeState } from './actions/actions'

interface Props {
  test23: Array<String>;
  changeState: Function
}


const App: React.FC<Props> = ({ test23, changeState }) => {

  const handleClick = () => {
    console.log('clicked');
    console.log(changeState);
    console.log(test23);
    changeState(['works?'])
    console.log(test23);
  }
  return (
    <div className="App">
      <SignUp />
      {test23.map((test, i) => {
        return <div>{test}{i}</div>
      })}
      <button onClick={handleClick}>change state</button>
    </div>
  );

}


const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    changeState: (newState: State) => { dispatch(changeState(newState)) }
  }
}

const mapStateToProps = (state: State) => {
  return {
    test23: state.test
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
