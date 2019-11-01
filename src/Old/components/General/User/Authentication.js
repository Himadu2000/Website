import React from "react";
import * as firebaseui from "firebaseui";
import firebase from "firebase";
import { Component } from "react";

class Authentication extends Component {
  /* TODO(DEVELOPER): Paste the initialization snippet from:
   * Firebase Console > Overview > Add Firebase to your web app. **/

  initApp = function() {
    firebase.auth().onAuthStateChanged(
      function(user) {
        if (user) {
          // User is signed in.
          var displayName = user.displayName;
          var email = user.email;
          var emailVerified = user.emailVerified;
          var photoURL = user.photoURL;
          var uid = user.uid;
          var phoneNumber = user.phoneNumber;
          var providerData = user.providerData;
          user.getIdToken().then(function(accessToken) {
            document.getElementById("sign-in-status").textContent = "Signed in";
            document.getElementById("sign-in").textContent = "Sign out";
            document.getElementById(
              "account-details"
            ).textContent = JSON.stringify(
              {
                displayName: displayName,
                email: email,
                emailVerified: emailVerified,
                phoneNumber: phoneNumber,
                photoURL: photoURL,
                uid: uid,
                accessToken: accessToken,
                providerData: providerData
              },
              null,
              "  "
            );
          });
        } else {
          // User is signed out.
          document.getElementById("sign-in-status").textContent = "Signed out";
          document.getElementById("sign-in").textContent = "Sign in";
          document.getElementById("account-details").textContent = "null";
        }
      },
      function(error) {
        console.log(error);
      }
    );
  };
  render() {
    return (
      <div>
        <h1>Welcome to My Awesome App</h1>
        <div id='sign-in-status'></div>
        <div id='sign-in'></div>
        <pre id='account-details'></pre>
      </div>
    );
  }
}

export default Authentication;
