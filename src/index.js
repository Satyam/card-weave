import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Teatro from './Teatro';
import Zoo from './zoo';
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Teatro />
    <Zoo />
  </React.StrictMode>,
  document.getElementById('root')
);
