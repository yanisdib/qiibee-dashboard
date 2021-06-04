import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { getUserSessionRequest } from './actions/auth';
import reportWebVitals from './reportWebVitals';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

import './assets/styles/style.scss';


const store = configureStore();
const userCookie = localStorage.getItem('qiibee-user') || sessionStorage.getItem('qiibee-user');

const launchApp = async () => {
  if (!!userCookie) {
    await store.dispatch(getUserSessionRequest(userCookie));
    return (
      ReactDOM.render(
        <React.StrictMode>
          <Provider store={store}>
            <AppRouter />
          </Provider>
        </React.StrictMode>,
        document.getElementById('root')
      )
    );
  } else {
    return (
      ReactDOM.render(
        <React.StrictMode>
          <Provider store={store}>
            <AppRouter />
          </Provider>
        </React.StrictMode>,
        document.getElementById('root')
      )
    );
  };
};

launchApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
