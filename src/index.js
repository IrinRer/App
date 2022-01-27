import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '././redux/reduxStore'; // данные 
import './index.css';
import App from './App';


  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
          <App state = {store.getState()} dispatch={store.dispatch.bind(store)}/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );

// state = {store.getState()} dispatch={store.dispatch.bind(store)}



