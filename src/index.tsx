import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import store from 'store';

import './css/reset.css';
import "nprogress/nprogress.css";
import './css/app.less';

import App from './App';

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

function initApp(cb?: Function) {
  if (cb) {
    cb();
  }
}

initApp(render);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
