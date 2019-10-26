import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import firebase from "firebase";
import flamelink from "flamelink";

import { Router } from "react-router-dom";
import Routes from "./Routes";
//Other
import "./components/IndexJS Files/index.css";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const history = require("history").createBrowserHistory();

const firebaseConfig = {
  apiKey: "AIzaSyDrQEupm_MrUm1eXRHVL6SJ6fHyS89Yxak",
  authDomain: "fir-32d38.firebaseapp.com",
  databaseURL: "https://fir-32d38.firebaseio.com",
  projectId: "fir-32d38",
  storageBucket: "fir-32d38.appspot.com",
  messagingSenderId: "785847414044",
  appId: "1:785847414044:web:1a7589d76c9ae57f969ed9",
  measurementId: "G-XVZXW5QXM6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const app = flamelink({
  firebaseApp,
  env: "production", // optional, defaults to `production`
  locale: "en-US", // optional, defaults to `en-US`
  dbType: "cf" // optional, defaults to `rtdb` - can be 'rtdb' or 'cf' (Realtime DB vs Cloud Firestore)
});

// Initialize Performance Monitoring and get a reference to the service
const perf = firebase.performance();

var db = firebase.firestore();

console.log(firebase);

ReactDOM.render(
  <Router history={history}>
    <Routes />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
