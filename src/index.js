import React from 'react';
import ReactDOM from 'react-dom';
import store from '././redux/reduxStore'; // данные 
import './index.css';
import App from './App';
import StoreContext from './redux/StoreContext';

let renderEntire = () => {
  ReactDOM.render(
    <React.StrictMode>
      <StoreContext.Provider value={store}>
          <App state = {store.getState()} dispatch={store.dispatch.bind(store)}/>
      </StoreContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
// state = {store.getState()} dispatch={store.dispatch.bind(store)}

renderEntire(store.getState());

store.subscribe(() => {
  let state = store.getState()
  renderEntire(state);
});


