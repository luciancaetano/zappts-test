import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';
import reportWebVitals from './reportWebVitals';
import 'reset-css';
import 'css-font-family/css/css-font-family.min.css';
import 'typeface-muli';
import 'fontsource-metropolis';
import './styles/style.scss';
import './styles/vars.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
