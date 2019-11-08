import React from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute, RequiresTutorialRoute } from "./utils/routing";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Support from "./pages/Support";
// import Signup from "./pages/Signup";
import Tutorial from "./pages/Tutorial";
import AppStack from "./pages/AppStack";
import Menu from "./components/Menu";
import TC from "./pages/TC/TC";
import PP from "./pages/PP/PP";
import { IonApp, IonSplitPane, IonPage, IonReactRouter } from "@ionic/react";
import { Provider } from "react-redux";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";
import "./theme.css";

import * as firebase from "firebase/app";
import "firebase/auth";

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
//firebase.initializeApp(firebaseConfig);

import store from "./store";

const App = () => (
  <Provider store={store}>
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId='main'>
          <Menu />
          <IonPage id='main'>
            <Switch>
              <PrivateRoute path='/account' component={Account} />
              <Route path='/tutorial' component={Tutorial} />
              <Route path='/logout' />
              <Route path='/tc' component={TC} />
              <Route path='/pp' component={PP} />
              <RequiresTutorialRoute path='/login' component={Login} />
              <RequiresTutorialRoute path='/support' component={Support} />
              {/* <RequiresTutorialRoute path='/signup' component={Signup} />*/}
              <RequiresTutorialRoute path='/' component={AppStack} />
            </Switch>
          </IonPage>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  </Provider>
);

export default App;
