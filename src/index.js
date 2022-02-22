import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers} from 'redux'
import App from './App';
import * as serviceWorker from './serviceWorker';
import HamburgerIconReducer from './store/reducers/hamburgerReducer'
import HeaderHeightReducer from './store/reducers/HeaderScrollHeight'
const rootReducer = combineReducers({
  HamburgerIcon:HamburgerIconReducer,
  HeaderHeightUpdate:HeaderHeightReducer
});
const Store = createStore(
  rootReducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 );
ReactDOM.render(
  // <React.StrictMode>
    <Provider store = {Store}>
      <App />
    </Provider>
  //</React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
