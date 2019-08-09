import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';

const appEl = document.createElement('div');
appEl.id = 'app';

const bodyEl = document.getElementsByTagName('body')[0];
bodyEl.appendChild(appEl);

const selector = document.getElementById('app');

ReactDOM.render(<App />, selector);
