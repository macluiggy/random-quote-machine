import React from 'react';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';
//cmpnts
import Header from './components/Header'
import { Provider, connect} from 'react-redux';
import { createStore} from 'redux'


const reducer = (state={kk:'jfjfj'}, action) => {
  switch (action.type) {
    case 'kk':
      return {
        kk: 'kkkkk'
      }
    default:
      return state;
  }
}
const store = createStore(reducer);
function Comp({state, change}) {
  return (
    <div id='quote-box'>
      <Header />
      <div>{state.kk}</div>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    state: state,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    change: () => dispatch({type: 'kk'}),
  }
}
const Container = connect(mapStateToProps, mapDispatchToProps)(Comp)

const App = () => {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
    )
}

export default App;
