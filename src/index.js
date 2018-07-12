import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import 'tachyons';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();