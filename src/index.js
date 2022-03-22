import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducer';  // equivalent to import rootReducer from './reducer/index.js'

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // the Redux devtools extension
);

console.log(store.getState());

console.log()
ReactDOM.render(
  /** Provider tells App which store to use for Redux */
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


