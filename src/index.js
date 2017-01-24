import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css';

const root = document.getElementById('root');

render(<App />, root);

if(module.hot){
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(<NextApp />, root);
  });
}


