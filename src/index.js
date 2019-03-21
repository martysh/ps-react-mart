import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/highlight.js/styles/ocean.css';
import Docs from './docs/Docs';
import myTheme from './theme/my-theme';

window.myTheme = myTheme;

ReactDOM.render(<Docs />, document.getElementById('root'));
