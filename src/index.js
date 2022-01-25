import React from 'react';
import ReactDOM from 'react-dom';
import store from '././redux/reduxStore'; // данные 
import './index.css';
import App from './App';

let renderEntire = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state = {store.getState()} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}


renderEntire(store.getState());

store.subscribe(() => {
  let state = store.getState()
  renderEntire(state);
});


