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
  <Provider store={store}>
    <App />  
  </Provider>,

  document.getElementById('root')
);

/** <Provider> tells App which store to use for Redux */

  /** !! Pass in store from Provider, s.t.
   * store can be accessed by all child components nested in Provider(i.e. <App/>),
   * and recursively, all child components of these child components. (i.e. All child of <App/>).
   * Essentially, store will be passed down to all components along the chain.
   */

  /**
   * NOTE: In this example: 
   * <Provider store={store}>
       <App />
     </Provider>
     <OtherApp />
   * 
   * 
     <OtherApp/> and all of its child components won't be able to access the store/global state.
     Since it's not nested in <Provider/>.
     */


