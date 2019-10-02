import './index.css';
import * as serviceWorker from './serviceWorker';

//Old

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";
import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./components/IndexJS Files/index.css";
import { Router } from "react-router-dom";
import registerServiceWorker from "./components/IndexJS Files/registerServiceWorker";
import Routes from "./Routes";

const history = require("history").createBrowserHistory();

const firebaseConfig = {
  apiKey: "AIzaSyDrQEupm_MrUm1eXRHVL6SJ6fHyS89Yxak",
  authDomain: "fir-32d38.firebaseapp.com",
  databaseURL: "https://fir-32d38.firebaseio.com",
  projectId: "fir-32d38",
  storageBucket: "fir-32d38.appspot.com",
  messagingSenderId: "785847414044",
  appId: "1:785847414044:web:1a7589d76c9ae57f969ed9"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Router history={history}>
    <Routes />
  </Router>,
  document.getElementById("root")
);

registerServiceWorker();

//Old

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
