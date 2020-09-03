import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Clock from './components/Clock';
// import Toggle from './components/Toggle';
// import LoginControl from './components/LoginControl';
// import Page from './components/Page';
// import Arrays from './components/Arrays';
// import NameForm from './components/NameForm';
// import FlavorForm from './components/FlavorForm';
import Reservation from "./components/Reservation";
import * as serviceWorker from './serviceWorker';

// const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(
  <div>
    {/*<Clock/>*/}
    {/*<Toggle/>*/}
    {/*<LoginControl/>*/}
    {/*<Page/>*/}
    {/*<Arrays numbers={numbers}/>*/}
    {/*<NameForm/>*/}
    {/*<FlavorForm/>*/}
    <Reservation/>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
