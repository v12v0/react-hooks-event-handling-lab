import React from 'react';
import ReactDOM from 'react-dom';

import Keypad from './components/Keypad';
import EyesOnMe from './components/EyesOnMe';

ReactDOM.render(
  <div>
    <Keypad />
    <EyesOnMe name="hello"/>
  </div>,
  document.getElementById('root')
);
