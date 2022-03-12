import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";

// import testImage from "./images/logoReact.svg"

ReactDOM.render(
  <React.Fragment>

    <App />
    
    {/* <img src={testImage} alt='Грустная собачка' style={{width: 200}} /> */}

  </React.Fragment>,
  document.getElementById("root")
);
