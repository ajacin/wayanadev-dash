import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers'
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const rootElement = document.getElementById("root");
ReactDOM.render(
  
  <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>
  ,
  rootElement
);
