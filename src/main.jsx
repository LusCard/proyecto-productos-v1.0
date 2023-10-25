import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import {App} from './App.jsx';
import { FiltersProvider } from './context/filter';
import {Auth0Provider} from "@auth0/auth0-react"


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain=""
    clientId=""
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <FiltersProvider>
    <App/>
  </FiltersProvider>
   </Auth0Provider>
)
