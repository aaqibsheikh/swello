import React from "react";
// import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { Web3ReactProvider } from "@web3-react/core";
// import { Web3Provider } from "@ethersproject/providers";

import reportWebVitals from "./reportWebVitals";
// require("dotenv").config();

// function getLibrary(provider) {
//   const library = new Web3Provider(provider);
//   library.pollingInterval = 12000;
//   return library;
// }

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <BrowserRouter> */}
//       {/* <Web3ReactProvider getLibrary={getLibrary}> */}
//         <App />
//       {/* </Web3ReactProvider> */}
//     {/* </BrowserRouter> */}
//   </React.StrictMode>,
//   document.getElementById("root")
// );

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<BrowserRouter><App /></BrowserRouter>);


reportWebVitals();
