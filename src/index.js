import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './queries.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

if(module.hot){
    module.hot.accept();
}

