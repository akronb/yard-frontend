/* eslint react/jsx-filename-extension: 0 */
// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
