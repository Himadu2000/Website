import React, { Component } from "react";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonRow,
  IonCol,
  IonMenuButton
} from "@ionic/react";
import "./Login.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import * as firebaseui from "firebaseui";
{
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
  firebase.initializeApp(firebaseConfig);

  console.log(firebase);
  // FirebaseUI config.
  var uiConfig = {
    signInSuccessUrl: "account",
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    ],
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    tosUrl: "tc",
    // Privacy policy url/callback.
    privacyPolicyUrl: function() {
      window.location.assign("pp");
    }
  };

  // Initialize the FirebaseUI Widget using Firebase.
  var ui = new firebaseui.auth.AuthUI(firebase.auth());
  // The start method will wait until the DOM is loaded.
  ui.start("#firebaseui-auth-container", uiConfig);
}
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log(user);
    this.updateUserName = "himadu";
  } else {
    // No user is signed in.
    console.log("No User");
  }
});
type State = {
  username: string | null;
};

export default class Login extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      username: null
    };
  }

  updateUserName(e: CustomEvent) {}
  logInUser() {}
  signUpUser() {}

  render() {
    return (
      <>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Login</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className='logo'>
          <img src='assets/img/appicon.svg' alt='Ionic logo' height='100' />
        </div>
        <div id='firebaseui-auth-container' className='nocss'></div>
        {/*    <form noValidate>
          <IonList no-lines>
            <IonItem>
              <IonLabel color='primary'>Username</IonLabel>
              <IonInput
                onIonChange={this.updateUserName}
                name='username'
                type='text'
                autocapitalize='off'
                value={this.state.username}
                required></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel color='primary'>Password</IonLabel>
              <IonInput name='password' type='password' required></IonInput>
            </IonItem>
          </IonList>

          <IonRow responsive-sm>
            <IonCol>
              <IonButton onClick={this.logInUser} type='submit'>
                Login
              </IonButton>
            </IonCol>
            <IonCol>
              <p>Not a member ?</p>
              <IonButton onClick={this.signUpUser} color='light'>
                Signup
              </IonButton>
            </IonCol>
          </IonRow>

        </form>
    */}
      </>
    );
  }
}
