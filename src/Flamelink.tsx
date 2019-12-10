import react from "react";
// Firebase app is always required and must be first
import firebase from "./Firebase";
// Add additional services that you want to use
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
// import 'firebase/firestore'
// import 'firebase/messaging'
// import 'firebase/functions'

// Flamelink app is always required
import flamelink from "flamelink/app";
// Add additional modules that you want to use
import "flamelink/content";
import "flamelink/storage";
// import 'flamelink/settings'
// import 'flamelink/navigation'
// import 'flamelink/users'

const firebaseApp = firebase;

const app = flamelink({
  firebaseApp,
  env: "production", // optional, defaults to `production`
  locale: "en-US", // optional, defaults to `en-US`
  dbType: "cf" // optional, defaults to `rtdb` - can be 'rtdb' or 'cf' (Realtime DB vs Cloud Firestore)
});

export default flamelink;
