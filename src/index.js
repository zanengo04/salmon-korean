import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

let gridType = ""
if (window.location.pathname === '/typing' || window.location.pathname === '/typing-hangeul'|| window.location.pathname === '/' ){
  gridType ="grid-container-other"
} else{
  gridType ="grid-container"
}

ReactDOM.render(
  <Auth0Provider
    domain="dev-5z8wlh0r.us.auth0.com"
    clientId="K2zGy4cwVflj7lRiI28kXJAmbHcNWssE"
    redirectUri={window.location.origin}
  >
    <App className ={gridType}/>
  </Auth0Provider>,
  document.getElementById("root")
);
