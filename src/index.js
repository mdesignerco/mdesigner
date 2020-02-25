import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/styles/App.scss';

import './global.scss';
import App from './components/App';

const container = document.getElementById('app');

ReactDOM.render(<App />, container);