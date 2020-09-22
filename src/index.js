import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Teatro from './Teatro';
import Zoo from './zoo';
import Espiral from './espiral';
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Teatro />
    <Zoo />
    <Espiral />
  </React.StrictMode>,
  document.getElementById('root')
);
