import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StyleProvider, ThemePicker } from 'vcc-ui';

ReactDOM.render(
  <React.StrictMode>
     <StyleProvider>
    <ThemePicker variant="light">
    <App />
    </ThemePicker>
    </StyleProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
