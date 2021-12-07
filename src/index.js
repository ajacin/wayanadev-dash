import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers'
import {Auth0Provider} from '@auth0/auth0-react'

//redux
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//auth0
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;


const rootElement = document.getElementById("root");



ReactDOM.render(
  
  <StrictMode>
    <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
    <Provider store={store}>
    <App />
    </Provider>
    </Auth0Provider>
  </StrictMode>
  ,
  rootElement
);

//then wrap the authO Context to App
//window.location.origin after the auth, it is going to redirect to the origin