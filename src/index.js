import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Ghibli from './components/Ghibli'

// TODO: Step 1: Make your first component!
ReactDOM.render(
  <React.StrictMode>
    <Ghibli />
  </React.StrictMode>,
  document.getElementById('root')
);

