import React from 'react';
import ReactDOM from 'react-dom';

//components
import Greeting from './greeting';


ReactDOM.render(
  <Greeting name="World"/>,
  document.querySelector('#root')
);
